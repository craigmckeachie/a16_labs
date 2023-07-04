import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountHeaderComponent } from './account-header/account-header.component';

@NgModule({
  declarations: [SigninComponent, AccountHeaderComponent],
  imports: [CommonModule, AccountRoutingModule, ReactiveFormsModule],
  exports: [AccountHeaderComponent],
})
export class AccountModule {}
