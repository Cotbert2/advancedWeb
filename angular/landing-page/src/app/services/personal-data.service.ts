import { Injectable, signal, Signal } from '@angular/core';
import { IAbout, IProjectData } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  constructor() { }


  //simulation
  getPersonalProjects() : IProjectData []{
    return  [
      {
        title: "Minex",
        description: "Multitax is a cross-platform application, helping (fictional) Minex employees to handle and manage their Mars exploration.",
        technologies: [
          "devicon-typescript-plain",
          "devicon-sass-original",
          "devicon-html5-plain",
          "devicon-java-plain",
          "devicon-swift-plain",
          "devicon-ruby-plain"
        ],
        image: "./assets/img/minex.jpeg",
        repository: "https://github.com/Cotbert2/mutltitax"
      },
      {
        title: "XD Ring",
        description: "As a graduate project in high school, we built XDRing: automation and operation with Telegram, WebSockets, video streaming, face recognition, door control, and more (yes, even more).",
        technologies: [
          "devicon-python-plain",
          "devicon-html5-plain",
          "devicon-cplusplus-plain",
          "devicon-javascript-plain",
          "devicon-css3-plain",
          "devicon-linux-plain",
          "devicon-raspberrypi-plain"
        ],
        image: "./assets/img/xdRing.jpeg",
        repository: "https://github.com/Cotbert2/XDRing"
      },
      {
        title: "Joe Cypher EDO",
        description: "JoeCypherEDO is an encryptation and decryptation algorithm as a subset of Joe Cybersecurity Framework. It use Lorenz' Atractor chaotical system as ordinary differential ecuations systen with the purpose of encrypting and decrypting messages as a symmetric key algorithm. The scripts manage the behavior of the cypher algorithm and offer an API to use it.",
        technologies: [
          "devicon-python-plain"
        ],
        image: "./assets/img/lorenz.png",
        repository: "https://github.com/Cotbert2/JoeCypherEDO/tree/main"
      },
      {
        title: "Jackson Store",
        description: "A complete e-commerce system teemplate for a fictional store. It includes a complete backend and frontend system, with a database and a complete API. The project aims to use top-use new technologies and frameworks, such as Angular,  GraphQL, Nest JS and MongoDB.",
        technologies: [
          "devicon-nestjs-plain",
          "devicon-mongodb-plain",
          "devicon-typescript-plain",
          "devicon-javascript-plain",
          "devicon-angularjs-plain",
          "devicon-graphql-plain",
          "devicon-html5-plain",
          "devicon-sass-original"
        ],
        image: "./assets/img/jackson.png",
        repository: "https://github.com/Cotbert2/e-comerce-template"
      },
      {
        title: "Texais",
        description: "A full complete tool fot pdf handle and latex",
        technologies: [
          "devicon-python-plain",
          "devicon-typescript-plain",
          "devicon-html5-plain",
          "devicon-sass-original",
          "devicon-django-plain"
        ],
        image: "./assets/img/texais.jpeg",
        repository: "https://github.com/Cotbert2/texais"
      },
      {
        title: "TrucoBotMusic",
        description: "A full complete tool fot pdf handle and latex",
        technologies: [
          "devicon-javascript-plain",
          "devicon-nodejs-plain",
          "devicon-discordjs-plain",
          "devicon-linux-plain"
        ],
        image: "./assets/img/trucobot.jpeg",
        repository: "https://github.com/Cotbert2/trucobotmusic"
      }
    ];
  }

  getAboutItems() : IAbout[] {
    return  [
    {
      title: "$more ./mE",
      description: `I found myself in the IT world when I was 15 years old, when I started to learn about programming
                and technology.
                I started at 2020 pandmeic, when I was in high school, and I started to learn about programming with
                Java, then i fell in love with different branches of development.
                I go through desktop applications, web development, mobile applications, embedded systems and then I
                found another passion: cybersecurity.
                I realeased my first app in 2021, a  Morse code translator that was available on the Play Store.
                I started developing malware and pentesting, I found my first vulnerability when I was 17.
                My porpouse is to learn as much as I can about technology and programming, and to be able to share
                that knowledge with others.
                I am a passionate developer, always looking for new challenges and opportunities to grow. `,
      image: "./assets/img/start.jpg"
    },
    {
      title : "College Participation",
      description : `
      Currently I'm studying at Espe in the Software Engineering career, here I participte into dev events
                such as Summer Byte as a ponnent and participate in the Army's CTF where we got 4nd place in general 12 teams competition,
                2nd place as an University team, and I got the 5th place in the individual competition from 36 participants.
                To me College is a opportunity to learn and grow, particularly in the field of soft skills.`,
      image: "./assets/img/summer.jpeg"
    }, {
      title: "$ top ./Hobbies.txt",
      description: `I really like to do a lot of stuff in me free time, I expent free time learning, coding, and practicing CTF, of course.
                Another passion in my life is music, I'm a guitar and drums player, I love to play rock and metal music.
                I also like to play video games, I play a lot of games, but my favorite ones are Naughty Dog games, like The Last of Us and Uncharted.`,
      image: "./assets/img/drum.jpg"
    }
  ];
  }


  getPersonalDataSignal(): Signal<IAbout[]> {
    return signal(this.getAboutItems());
  }

  getProjectsSignal(): Signal<IProjectData[]> {
    return signal(this.getPersonalProjects());
  }

}
