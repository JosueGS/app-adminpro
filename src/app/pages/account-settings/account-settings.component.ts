import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  // para no saltar al dom recomendable

  constructor(private serviceSetting: SettingsService) { }

  ngOnInit(): void {
    this.serviceSetting.checkCurrentTheme();
  }

  changeTheme(theme:string){

    this.serviceSetting.changeTheme(theme);

  }



}
