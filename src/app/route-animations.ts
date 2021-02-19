import {trigger,transition,state,style,query,group,animateChild,animate,keyframes, stagger,
  } from '@angular/animations';


//plainerAnim
export let explainerAnimLeft = trigger ('explainerAnimLeft',[
  transition('* => *', [
    query('.anime1',style({opacity:0,transform:'translateX(-50px)'}),{ optional: true }),
    query('.anime1',stagger('600ms',[
      animate('600ms ease-out',style({ opacity:1,transform:'translateX(0)'}))
    ]),{ optional: true })
  ])
]);

export let explainerAnimRight = trigger ('explainerAnimRight',[
  transition('* => *', [
    query('.anime1',style({opacity:0,transform:'translateX(50px)'}),{ optional: true }),
    query('.anime1',stagger('600ms',[
      animate('600ms ease-out',style({ opacity:1,transform:'translateX(0)'}))
    ]),{ optional: true })
  ])
]);

//fader
  export const fader =
  //routeAnimations
  trigger('fader', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query('.anime1', [
        style({
          position: 'relative',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ]),
      // Animate the new page in
      query('.anime1', [
        animate('1000ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ])
    ]),
]);



//stepper
export const stepperRight =
  trigger('stepperRight', [
    transition('* <=> *', [
      query('.anime1', [
        style({
          position: 'relative',
          left: 0,
          width: '100%',
        },),
      ]),
    
        query('.anime1', [
          animate('1500ms ease', keyframes([
            style({ transform: 'scale(0) translateX(100%) rotate(-60deg) scale(6)', offset: 0 }),
            style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
          ])),
        ]),
      
    ])
]);

export const stepperLeft =
  trigger('stepperLeft', [
    transition('* <=> *', [
      query('.anime1', [
        style({
          position: 'relative',
          left: 0,
          width: '100%',
        },),
      ]),
    
        query('.anime1', [
          animate('1500ms ease', keyframes([
            style({ transform: 'scale(0) translateX(100%) rotate(60deg) scale(6)', offset: 0 }),
            style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
          ])),
        ]),
      
    ])
]);
