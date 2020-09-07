import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service'
import { IProfile, IHobbies } from '../../interfaces/profile/profile'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.page.html',
  styleUrls: ['./editskills.page.scss'],
})

export class EditskillsPage implements OnInit {

  skills: string[] = []

  profile: IProfile

  constructor(
    private profileService: ProfileService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {

    this.profileService.profileSubject.asObservable().subscribe(profile => {
      this.profile = profile
      this.skills = profile?.skills
    })

  }

  addSkill() {

    this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'New Skill',
      inputs: [
        {
          name: 'Name',
          type: 'text',
          //id: 'name2-id',
          //value: '',
          placeholder: 'Skill Name'
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
            console.log("skill:", e)
            this.addNewSkill(e.Name)
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present()
    })
  }

  addNewSkill(skill: string) {

    if (this.skills.filter(x => x == skill).length > 0) {
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
          this.skills.push(skill)
          this.profile.skills = this.skills
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

  deleteSkill(skillName: string) {

    this.alertCtrl.create({
      header: 'Are you sure?',
      message: `Do you really want to delete this skill '${skillName}'?`,
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Save',
        handler: () => {
          this.skills = this.skills.filter(s => s != skillName)
          this.profile.skills = this.skills

          this.profileService.saveData(this.profile)
            .then(x => {
              //this.ShowSucessAlert()
            })

        }
      }]
    }).then(alertEl => {
      alertEl.present();
    })
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
      message: 'Please make sure the Skill is not already added.',
      buttons: ['OK']
    }).then(alertEl => {
      alertEl.present();
    })
  }

}

