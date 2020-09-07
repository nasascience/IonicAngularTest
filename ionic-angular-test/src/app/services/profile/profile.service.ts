import { Injectable } from '@angular/core';
import { IProfile, IWorkExperience, IHobbies } from '../../interfaces/profile/profile';
import { resolve } from 'dns';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { promise } from 'protractor';
import { rejects } from 'assert';
import { defer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileSubject = new BehaviorSubject<IProfile>(null);
  profile = this.profileSubject.asObservable();

  constructor(public loadingCtrl: LoadingController) { 
    this.loadingCtrl.create({
      message: "Fetching data..."
    }).then((loadingEl)=>{

      loadingEl.present()
      this.getProfileDataFromServer()
      .then(x => {
        this.loadingCtrl.dismiss()
      })

    })
  }


  private getProfileDataFromServer(): Promise<IProfile> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let mydata = localStorage.getItem("profile")

        // simulation
        if (mydata) {
          console.log("Fake server: LocalStorage")
          let dataObj =JSON.parse(mydata)
          this.profileSubject.next(dataObj)
          resolve(dataObj)
        } else {
          console.log("Fake server: LocalData")
          let proData = this.buildData()
          let jsonData = JSON.stringify(proData)
          localStorage.setItem("profile",jsonData)
    
          this.profileSubject.next(proData)
          resolve(proData)
        }
      }, 2);
    })
  }

  retrieveProfileData(): Observable<IProfile>{
    //console.log(this.profile.source.source.)
    if(this.profile != null)
      return this.profile
    else
     return defer(() => this.getProfileDataFromServer())//; from(this.getProfileDataFromServer()) 
  }

  saveData(data: IProfile): Promise<IProfile> {
    return new Promise((resolve, reject) => {

      // Loading 
      this.loadingCtrl.create({
        message: "Fetching data..."
      }).then((loadingEl)=>{
        //Saving data
        loadingEl.present()
        setTimeout(() => {
          let parsedData = JSON.stringify(data)
          localStorage.setItem("profile", parsedData)
          resolve(data)
          this.loadingCtrl.dismiss()
        }, 3)
      })
    })
  }


  private buildData(): IProfile {
    return {
      name: "Johan",
      surname: "Perez",
      email: "nasa_science@hotmail.com",
      photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      title: "Full Stack Developer",
      //description: `I’m a full-stack developer with over 9 years of professional experience working with top notch organizations. Developing Web, Desktop and Mobile applications. Currently looking only for 100% remote job.`,
      hobbies: [
        { name: 'Piano', icon: 'musical-notes-outline' },
        { name: 'Singing', icon: 'mic-outline' },
        { name: 'Chess', icon: 'game-controller-outline' },
        { name: 'Travel', icon: 'airplane-outline' }
      ],
      skills: [
        'HTML 5', 'JavaScript and jQuery', 'AngularJS', 'Angular 2-8', 'Typescript', 'C#', '.Net core', 'ASP.net', 'WEB API', 'Vb.net', 'Azure', 'Azure Devops',
        'Azure CI/CD', 'Azure App Insights', 'CSS', 'CSS3', 'Sass', 'Bootstrap', 'PrimeNG', 'SVN', 'Git', 'MSSQL', 'MySql', 'XML', 'Unity', 'Google maps Api',
        'Web GL/ 2d & 3d (C#)', 'Karma/Jasmine'
      ],
      workExperience: [
        {
          id:"1",
          title: 'Richmond group (UK)- Full-stack Developer / 1,5+ years (Fullremote)',
          subtitle: '',
          content: `My main job here was to design and develop from scratch a CRM
          product backend and frontend, implementing new features and
          maintaining the app. Connecting to Rest Api services. Also, I
          was in charge of creating and maintaining other webapps and web
          services for Loanbook and admin configurations. Also built on
          Azure devops our company’s CI/CD pipelines.`
        },
        {
          id:"2",
          title: 'Blueberry Consultants (UK)- Full-stack Developer / 6 years(Full remote)',
          subtitle: 'Logistic Company',
          content: `My main role was full stack developer. Designed and
          developed a web app and Web Api services where shipping
          companies among other features could manage their orders,
          billing and payments. I used google maps Api for calculating
          distances, delivery time and shipping price.`
        },
        {
          id:"3",
          title: 'Blueberry Consultants (UK)- Full-stack Developer / 6 years(Full remote)',
          subtitle: 'Industrial fans production Web application',
          content: `Collaborated as a full stack developer, building a full
          responsive web app. Integrating complex math calculations to
          achieve input requirements. Which result on data generated
          for the company to build the fan. I used ChartJs to display
          tabular data, sound data, resonance, volume flow vs pressure
          and other charts.`
        },
        {
          id:"4",
          title: 'Blueberry Consultants (UK)- Full-stack Developer / 6 years(Full remote)',
          subtitle: 'Protective glasses production Web application',
          content: `My main job was to design and develop a full responsive web
          app which communicates with external and internal company’s
          webservices. The company’s app consisted on a system to
          allow their clients to order Protective glasses for
          production.`
        },
        {
          id:"5",
          title: 'Freelancer / 2 years (full remote)',
          subtitle: '',
          content: `Developed and designed web and mobile applications for android
          and iOS for clients worldwide. Tech stack: C#, Restful web Api
          services, MySql, MSSQL, XML and Unity.`
        }
      ]

    }
  }
}
