export interface IProfile{
    name: string
    surname: string
    email: string
    photo: string
    title: string
    // description:string
    skills: string[]
    hobbies: IHobbies[]
    workExperience: IWorkExperience[]
}

export interface IWorkExperience{
id: string
title: string
subtitle: string
content: string
}

export interface IHobbies{
    name: string
    icon: string
}