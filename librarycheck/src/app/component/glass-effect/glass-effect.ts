import {
  Component,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit,
  NgZone,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-glass-effect',
  template: `
    <button #btn class="glass-button" (click)="handleClick()" [style.fontSize.px]="size">
      {{ text }}
    </button>
  `,
  styles: [`
    .glass-button {
      position: relative;
      border: none;
      border-radius: 24px;
      padding: 16px 32px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      overflow: hidden;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(12px) saturate(150%);
      -webkit-backdrop-filter: blur(12px) saturate(150%);
      box-shadow: inset 0 1px 2px rgba(255,255,255,0.25),
                  0 8px 20px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
    }
    .glass-button:hover {
      transform: translateY(-2px);
      box-shadow: inset 0 1px 2px rgba(255,255,255,0.25),
                  0 12px 30px rgba(0,0,0,0.25);
    }
  `],
  standalone: true
})
export class GlassButtonComponent implements OnInit, AfterViewInit {
  @Input() text = 'Glass Button';
  @Input() size = 24;
  @Input() onClick: (text: string) => void = () => {};

  private canvas!: HTMLCanvasElement;
  private gl!: WebGLRenderingContext;
  private program!: WebGLProgram;
  private startTime = performance.now();

  constructor(private el: ElementRef, private zone: NgZone, private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.initWebGL();
    });
  }

  handleClick(): void {
    this.onClick(this.text);
  }

  private initWebGL(): void {
    const btn: HTMLElement = this.el.nativeElement.querySelector('button');
    if (!btn) return;

    // Create overlay canvas
    this.canvas = this.renderer.createElement('canvas');
    this.renderer.setStyle(this.canvas, 'position', 'absolute');
    this.renderer.setStyle(this.canvas, 'top', '0');
    this.renderer.setStyle(this.canvas, 'left', '0');
    this.renderer.setStyle(this.canvas, 'width', '100%');
    this.renderer.setStyle(this.canvas, 'height', '100%');
    this.renderer.setStyle(this.canvas, 'pointer-events', 'none');
    this.renderer.setStyle(this.canvas, 'border-radius', 'inherit');
    this.renderer.appendChild(btn, this.canvas);

    this.gl = this.canvas.getContext('webgl')!;
    if (!this.gl) return;

    // Vertex shader (simple full screen quad)
    const vertexSrc = `
      attribute vec2 aPosition;
      varying vec2 vUV;
      void main() {
        vUV = aPosition * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    // Fragment shader (blur + tint + ripple)
    const fragmentSrc = `
      precision mediump float;
      uniform sampler2D uTexture;
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUV;

      // Simple ripple effect
      void main() {
        vec2 uv = vUV;
        float ripple = 0.03 * sin(10.0 * uv.y + uTime * 3.0) * cos(10.0 * uv.x + uTime * 3.0);
        uv += ripple;

        vec4 color = texture2D(uTexture, uv);

        // Apply tint
        color.rgb += vec3(0.1, 0.15, 0.2);

        gl_FragColor = color;
      }
    `;

    this.gl.useProgram(this.program);

    // Fullscreen quad
    const buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array([-1,-1, 1,-1, -1,1, 1,1]),
      this.gl.STATIC_DRAW
    );
    const aPosition = this.gl.getAttribLocation(this.program, 'aPosition');
    this.gl.enableVertexAttribArray(aPosition);
    this.gl.vertexAttribPointer(aPosition, 2, this.gl.FLOAT, false, 0, 0);

    // Capture page snapshot
    import('html2canvas').then(html2canvas => {
      html2canvas.default(document.body, {backgroundColor:null}).then(snapshot => {
        const tex = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, tex);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, snapshot);

        const uTexture = this.gl.getUniformLocation(this.program, 'uTexture');
        this.gl.uniform1i(uTexture, 0);

        const uTime = this.gl.getUniformLocation(this.program, 'uTime');
        const uResolution = this.gl.getUniformLocation(this.program, 'uResolution');
        this.gl.uniform2f(uResolution, btn.clientWidth, btn.clientHeight);

        const render = () => {
          const now = (performance.now() - this.startTime)/1000;
          this.gl.uniform1f(uTime, now);
          this.gl.viewport(0,0,btn.clientWidth, btn.clientHeight);
          this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4);
          requestAnimationFrame(render);
        };
        render();
      });
    });

    window.addEventListener('resize', () => {
      this.canvas.width = btn.clientWidth;
      this.canvas.height = btn.clientHeight;
      this.gl.viewport(0, 0, btn.clientWidth, btn.clientHeight);
    });
  }

  private createShader(type: number, source: string): WebGLShader {
    const shader = this.gl.createShader(type)!;
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      console.error(this.gl.getShaderInfoLog(shader));
    }
    return shader;
  }
}
