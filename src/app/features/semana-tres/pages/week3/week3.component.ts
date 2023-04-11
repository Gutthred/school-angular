import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  templateUrl: './week3.component.html',
  styleUrls: ['./week3.component.scss'],
})
export class Week3Component {
  users: User[] = [{
    id: 1,
    name: 'Giorgino Atalanti',
    description:
      'Someone who has living between 0 BC and 2500 AC, which has been designated to implement the most traditional way of living to the whole humanity, creator of veganism, activist, femminism, neutral gender and all those cringe stuffs.',
    wage: 2,
    role: 'Victim of society',
  },
  {
    id: 2,
    name: 'John Clash',
    description:
      'As a self-proclaimed dog enthusiast, I find immense joy in the company of my furry friends. However, I must admit that I am not a fan of our feline friends. When it comes to my lifestyle, I know that I need to work on some unhealthy habits. My typical day involves lounging in bed and indulging in junk food like Doritos and Fanta. I admittedly have a weakness for fast food as well. I am on a journey to make healthier choices and improve my overall well-being, but for now, I embrace my love for dogs and my disdain for cats.',
    wage: 2,
    role: 'Doggy lover',
  },
  {
    id: 3,
    name: 'Samantha Schul',
    description:
    `As a devout feline enthusiast, I take great pride in my keen ability to appreciate the finer things in life. While my disdain for canines may ruffle a few feathers, it simply highlights my commitment to upholding the regal nature of cats. As for my daily routines, I take pleasure in indulging in lavish snacking sessions from the comfort of my opulent bedding, surrounded by only the most decadent of chips and soda. My affinity for fast food is simply a testament to my refined palate. So if you're in need of a luxurious and unapologetically lavish social media presence, look no further. I am the epitome of grandeur and unabashed indulgence.`,
    wage: 2,
    role: 'Victim of society',
  },
  {
    id: 4,
    name: 'Larissa Larasso',
    description:
      `Hey there, I'm a total cat person who can't help but dislike dogs. You can usually find me lounging in bed all day, snacking on Doritos and sipping on some Fanta. Fast food is my guilty pleasure - I can never resist a good burger or some crispy fries. Follow along for some funny cat memes and maybe some questionable eating habits!`,
    wage: 2,
    role: 'Unemployed',
  },
];
}
