import { Theme } from './symbols';

export const darkTheme: Theme = {
  name: 'dark',
  properties: {
    '--background':'#293643',
    '--on-background':'#B1BECE',
    '--primary':'#F1CEAE',

    '--box-color':'#26313d',
    '--blueboxcolor':'#26313d',

    '--darkforbutton':'#3A4757',
    '--bottonColor':'linear-gradient(90deg, #A7C6CA -20.36%, rgba(235, 199, 178, 0.488119) 63.92%, rgba(238, 227, 126, 0.43) 119.76%), #F1CEAE',
    '--on-button':'#ffcc99',
    '--boxshadow':'10px 4px 15px rgba(0, 0, 0, 0.35), inset -3px -5px 12px rgba(52, 61, 96, 0.5), inset 6px 8px 12px rgba(135, 147, 162, 0.1)',
    '--boxshadow-hover':'0px 35px 77px -17px rgba(0, 0, 0, 0.64), inset -3px -5px 12px rgba(52, 61, 96, 0.5), inset 6px 8px 12px rgba(135, 147, 162, 0.1)',
    '--boxshadow-reverse':'10px 4px 15px rgba(0, 0, 0, 0.35), inset 3px -5px 12px rgba(52, 61, 96, 0.5), inset 6px 8px 12px rgba(135, 147, 162, 0.1)',
       
    '--logo':'#B1BECE',

    //webdesign
    '--processus-webdesign':'url("/assets/images/webdesign/processus.png")',
    '--identity-webdesign':'url("/assets/images/webdesign/identity.png")',

    //ecommerce
    '--processus-ecommerce':'url("/assets/images/ecommerce/processus.png")',
    '--identity-ecommerce':'url("/assets/images/ecommerce/identity.png")',
    
    //graphic desgin
    '--processus-graphicdesign':'url("/assets/images/graphicdesign/processus.png")',
    
  }
} 