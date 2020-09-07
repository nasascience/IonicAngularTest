import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service'
import { IProfile, IHobbies } from '../../interfaces/profile/profile'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edithobbies',
  templateUrl: './edithobbies.page.html',
  styleUrls: ['./edithobbies.page.scss'],
})
export class EdithobbiesPage implements OnInit {

  hobbies: IHobbies[] =[]
  
  profile: IProfile
  
    constructor(
      private profileService: ProfileService,
      private alertCtrl: AlertController
      ) { }
  
    ngOnInit() {
  
      this.profileService.profileSubject.asObservable().subscribe(profile =>{
       this.profile = profile
       this.hobbies = profile?.hobbies
      })

    }

    addHobbie(){
       this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'New Hobbie',
          inputs: [
            {
              name: 'Name',
              type: 'text',
               //id: 'name2-id',
              //value: '',
              placeholder: 'Hobbie Name'
            },
            {
              name: 'Icon',
              type: 'text',
              //id: 'name2-id',
              //value: '',
              placeholder: 'Icon Name'
            }
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            }, {
              text: 'Ok',
              handler: (e) => {
                let hobbie: IHobbies = {name: e.Name, icon: e.Icon}              
                this.addNewHobbie(hobbie)
              }
            }
          ]
        }).then(alertEl =>{
          alertEl.present()
        })
    }

    addNewHobbie(hobbie: IHobbies){
      if (this.hobbies.filter(x => x.name == hobbie.name).length > 0) {
        this.ShowDuplicateAlert()
        return
      }

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
            this.hobbies.push(hobbie)
            this.profile.hobbies =  this.hobbies
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

    deleteHobbie(hobbieName: string){
     
      this.alertCtrl.create({
        header: 'Are you sure?',
        message: `Do you really want to delete thi hobbie '${hobbieName}'?`,
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: () => {
            this.hobbies = this.hobbies.filter(h => h.name != hobbieName)
            this.profile.hobbies =  this.hobbies
  
            this.profileService.saveData(this.profile)
            .then(x => {
             // this.ShowSucessAlert()
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
      }).then(alertEl => {
        alertEl.present();
      })
    }

    ShowDuplicateAlert(){
      this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Please make sure the Hobbie is not already added.',
        buttons: ['OK']
      }).then(alertEl => {
        alertEl.present();
      })
    }
}
