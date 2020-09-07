import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service'
import { IProfile } from '../../interfaces/profile/profile'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.page.html',
  styleUrls: ['./editdetails.page.scss'],
})
export class EditdetailsPage implements OnInit {
name: string
surname: string
email: string
jobTitle: string

profile: IProfile

  constructor(
    private profileService: ProfileService,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {


    this.profileService.profileSubject.asObservable().subscribe(profile =>{
     this.profile = profile

     this.name = profile?.name
     this.surname = profile?.surname
     this.email = profile?.email
     this.jobTitle = profile?.title
    })
  }

  saveDetails(){
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to save the changes?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Save',
        handler: () => {
          this.profile.name = this.name
          this.profile.surname = this.surname
          this.profile.email = this.email
          this.profile.title = this.jobTitle

          this.profileService.saveData(this.profile)
          .then(x => {
            this.ShowSucessAlert()
        })
         
        }
      }]
    }).then(alertEl =>{
      alertEl.present();
    })
  }

  ShowSucessAlert(){
    this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      message: 'The data has been saved successfully.',
      buttons: ['OK']
    });
  }

}
