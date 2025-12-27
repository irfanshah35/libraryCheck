import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { toaster } from "universe-code/uiux";
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class AppComponent {

  userBalance: number = 0;
  userExposure: number = 0;

  constructor(private router: Router, private http: HttpClient) {
    toaster.configure({
      position: "top-left",
      maxToasts: 7,
      duration: 4000,
    });
  }

  success() {
    toaster.success({
      title: "Success",
      description: "Success toast."
    })
  };
  error() {
    toaster.error({
      title: "error",
      description: "Error toast."
    })
  };
  info() {
    toaster.info({
      title: "Info",
      description: "Information message."
    })
  };
  warning() {

    toaster.warning({
      title: "Warning",
      description: "Warning message."
    })
  }
  goExchange() {
    this.router.navigate(['/exchange']);
  }

  goDomi() {
    this.router.navigate(['/domi']);
  }
  ngOnInit(): void {
    this.getBalance();
  }

  // 🔥 Direct API call
  getBalance(): void {

    const API_URL = 'https://t20diamond.com/app/exchange/users/userBalance';

    const token = localStorage.getItem('token'); // agar token localStorage mein hai

    this.http.post<any>(
      API_URL,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true // 🔥 MUST for cookie-based auth
      }
    )
      .pipe(first())
      .subscribe({
        next: (res) => {
          if (res?.meta?.status) {
            this.userBalance = +(
              res.data.bankBalance - res.data.exposure
            ).toFixed(0);
            this.userExposure = res.data.exposure;
          }
        },
        error: (err) => {
          console.error('401 Error:', err);

          toaster.error({
            title: 'Unauthorized',
            description: 'Session expired or invalid token'
          });
        }
      });
  }

}