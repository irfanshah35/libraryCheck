import { Component } from '@angular/core';
import { AppIdbService } from './service/indexdb.service';
import { ApiService } from './service/api.service';
import toaster from 'universe-code/toaster';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
   standalone: true,            
  imports: [RouterOutlet, RouterLink], 
})
export class AppComponent   {
  constructor(
    private readonly api: ApiService,
    private readonly idb: AppIdbService
  ) {}

  
   ngOnInit() {
    // Configure toaster (optional)
    toaster.configure({
      position: 'top-right',
      duration: 4000,
      maxToasts: 5,
      animation: 'slide',
    });

    // Example: Show welcome toast on init
    toaster.info('Welcome to Universe Code!', {
      title: '👋 Hello',
      duration: 3000,
    });
  }

  // Success toasts
  showSuccess() {
    toaster.success('Operation completed successfully!', {
      title: '✅ Success',
    });
  }

  showBetSuccess() {
    toaster.success('Your single bet on Manchester United to win at 2.50 odds is now live! Stake: $50 | Potential return: $125', {
      title: '🎉 Bet Successfully Placed!',
      duration: 5000,
    });
  }

  showDepositSuccess() {
    toaster.success('$100 deposited to your betting wallet. Current balance: $325.50. Ready to back your next winning predictions!', {
      title: '💸 Betting Funds Added!',
      duration: 4000,
    });
  }

  showWinning() {
    toaster.success('Your over 2.5 goals bet on Real Madrid won! Stake: $25 | Odds: 1.80 | Winnings: $45.00 added!', {
      title: '🎊 WINNING BET SETTLED!',
      duration: 6000,
    });
  }

  // Error toasts
  showError() {
    toaster.error('Something went wrong. Please try again.', {
      title: '❌ Error',
      duration: 5000,
    });
  }

  showInsufficientBalance() {
    toaster.error('You need $25 more to place this accumulator bet. Top up your account to continue!', {
      title: '💰 Insufficient Betting Balance',
      duration: 5000,
    });
  }

  showLoginFailed() {
    toaster.error('Login credentials don\'t match our records. Check your email and password!', {
      title: '🔐 Betting Account Access Denied',
      duration: 5000,
    });
  }

  showBetLost() {
    toaster.error('Close one! Your both teams to score bet didn\'t come in this time. Final score: 2-0', {
      title: '😔 Bet Settled - No Win',
      duration: 5000,
    });
  }

  // Warning toasts
  showWarning() {
    toaster.warning('Please check your input before proceeding', {
      title: '⚠️ Warning',
    });
  }

  showOddsChanged() {
    toaster.warning('Odds changed from 3.20 to 2.85 for your selection. Accept new odds to place bet!', {
      title: '📈 Live Odds Movement',
      duration: 5000,
    });
  }

  showLowBalance() {
    toaster.warning('Your betting balance is $25.50. Consider depositing more to place larger stakes!', {
      title: '🔔 Low Betting Funds Alert',
      duration: 5000,
    });
  }

  showAccountLocked() {
    toaster.warning('Your account is locked after multiple login attempts. Wait 15 minutes to resume betting!', {
      title: '🛡️ Account Temporarily Restricted',
      duration: 6000,
    });
  }

  // Info toasts
  showInfo() {
    toaster.info('New updates are available', {
      title: 'ℹ️ Information',
    });
  }

  showProcessing() {
    toaster.info('Placing your over 2.5 goals bet on Liverpool vs City. Checking final odds...', {
      title: '🔄 Processing Your Wager...',
     
    });
  }

  showEmailVerification() {
    toaster.info('Almost ready to start betting! Verify your email to unlock all markets and promotional offers!', {
      title: '📧 Verify Email for Betting Access',
      duration: 5000,
    });
  }

  showBetActive() {
    toaster.info('Your in-play over 1.5 goals bet is active! Current score: 1-0 (67 mins). One more goal needed!', {
      title: '📊 Live Bet Still Running',
      duration: 5000,
    });
  }

  // Multiple toasts
  showMultipleToasts() {
    toaster.info('Processing your request...', { 
      title: '⏳ Processing',
      duration: 2000 
    });
    setTimeout(() => {
      toaster.success('Request processed!', {
        title: '✅ Complete',
      });
    }, 2000);
  }

  // Long duration toast
  showLongToast() {
    toaster.warning('This is an important message that will stay longer', {
      title: '⚠️ Important Notice',
      duration: 10000,
    });
  }

  // Persistent toast (no auto-dismiss)
  showPersistentToast() {
    toaster.error('Critical error - click X to dismiss', {
      title: '🚨 Critical Alert',
      duration: 0,
    });
  }

  // Clear all toasts
  clearAllToasts() {
    toaster.clear();
  }

}
