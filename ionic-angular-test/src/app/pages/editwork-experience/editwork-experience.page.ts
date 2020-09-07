import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service'
import { IProfile, IWorkExperience } from '../../interfaces/profile/profile'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-editwork-experience',
  templateUrl: './editwork-experience.page.html',
  styleUrls: ['./editwork-experience.page.scss'],
})
export class EditworkExperiencePage implements OnInit {


  wExperience: IWorkExperience[] = []

  profile: IProfile

  constructor(
    private profileService: ProfileService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.profileService.profileSubject.asObservable().subscribe(profile => {
      this.profile = profile
      this.wExperience = profile?.workExperience
    })

  }

  addExperience() {
    this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'New Work Experience',
      inputs: [
        {
          name: 'Title',
          type: 'text',
          //id: 'name2-id',
          //value: '',
          placeholder: 'Company - Work Title - Years of experience'
        },
        {
          name: 'Subtitle',
          type: 'text',
          //id: 'name2-id',
          //value: '',
          placeholder: 'Project title'
        },
        {
          name: 'Content',
          type: 'text',
          //id: 'name2-id',
          //value: '',
          placeholder: 'Your role, stacks, project description...'
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
          handler: (data) => {
            let wExperience: IWorkExperience = {
              id: this.create_UUID(),
              title: data.Title,
              subtitle: data.Subtitle,
              content: data.Content
            }
            this.addNewExperience(wExperience)
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present()
    })
  }

  addNewExperience(wExperience: IWorkExperience) {

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
          this.wExperience.push(wExperience)
          this.profile.workExperience = this.wExperience
          this.profileService.saveData(this.profile)
            .then(x => {
              this.ShowSucessAlert()
            })

        }
      }]
    }).then(alertEl => {
      alertEl.present();
    })
  }

  deleteExperience(id: string) {

    this.alertCtrl.create({
      header: 'Are you sure?',
      message: `Do you really want to delete this Work Experience?`,
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Save',
        handler: () => {
          this.wExperience = this.wExperience.filter(w => w.id != id)
          this.profile.workExperience = this.wExperience

          this.profileService.saveData(this.profile)
            .then(x => {
              // this.ShowSucessAlert()
            })

        }
      }]
    }).then(alertEl => {
      alertEl.present();
    })
  }

  create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  ShowSucessAlert() {
    this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      message: 'The data has been saved successfully.',
      buttons: ['OK']
    }).then(alertEl => {
      alertEl.present();
    })
  }

  ShowDuplicateAlert() {
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
