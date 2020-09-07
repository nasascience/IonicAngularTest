import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProfileService } from '../services/profile/profile.service'
import { IProfile } from '../interfaces/profile/profile'
import { Router, NavigationStart } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  profile: IProfile
  constructor(
    private menu: MenuController, 
    private profileService: ProfileService,
    private router: Router ) {

      this.profileService.retrieveProfileData()
      .subscribe(data => {
        this.profile= data
        console.log(this.profile)
      })
    }

    selSegment:string = "experience"
    

    ngOnInit(){
     
 
    }

    segmentChanged(ev: any) {
     // console.log('Segment changed', ev);
      console.log(this.selSegment)
    }

    openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }
  
    openEnd() {
      this.menu.open('end');
    }
  
    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }

}
