import { Injectable } from '@angular/core';
import { IMenu } from '../../interfaces/menu/menu'
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  pages: IMenu[]
  constructor() { }


  getMenu(): IMenu[]{
    return this.pages = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home-outline'
      },
      {
        title: 'Edit Details',
        url: '/editdetails',
        icon: 'create-outline'
      },
      {
        title: 'Edit Skills',
        url: '/editskills',
        icon: 'desktop-outline'
      },
      {
        title: 'Edit Hobbies',
        url: '/edithobbies',
        icon: 'bicycle-outline'
      },
      {
        title: 'Edit Work Experience',
        url: '/editwork-experience',
        icon: 'briefcase-outline'
      }
      // ,
      // {
      //   title: 'Inbox',
      //   url: '/inbox',
      //   icon: 'mail'
      // },
      // {
      //   title: 'Trash',
      //   url: '/trash',
      //   icon: 'trash'
      // }
    ]
  }
}
