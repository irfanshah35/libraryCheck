import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import html2canvas from 'html2canvas';

function setupGlobalGlassCanvas() {
  // Create canvas overlay
  const canvas = document.createElement('canvas');
  canvas.id = 'global-glass-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  // Get WebGL context
  const gl = canvas.getContext('webgl');
  if (!gl) {
    console.warn('WebGL not supported for global glass effect!');
    return;
  }

 function captureAndDraw() {
  const gl = canvas.getContext('webgl');
  if (!gl) return; // Safe check

  html2canvas(document.body, { backgroundColor: null }).then(snapshot => {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      snapshot
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.viewport(0, 0, canvas.width, canvas.height);
  });
}


  // Initial capture
  captureAndDraw();

  // Update on resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    captureAndDraw();
  });
}

// Bootstrap Angular app and setup global canvas
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-top-center',
      timeOut: 3000,
      preventDuplicates: true
    })
  ]
})
  .then(() => {
    setupGlobalGlassCanvas();
  })
  .catch(err => console.error(err));
