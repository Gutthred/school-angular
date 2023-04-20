import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent, LoginComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [LoginComponent],
})
export class LoginModule {}
