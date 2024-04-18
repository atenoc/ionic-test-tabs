import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) {}

  gets(tab: IonTabs) {
    console.log("tab selected: "+ tab.getSelected())
    console.log("url: "+this.router.url)
    if ("/tabs/" + tab.getSelected() != this.router.url) {
      this.router.navigateByUrl("tabs/" + tab.getSelected());
      console.log("get tabs fin")
    }
  }

}
