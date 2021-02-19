import { Theme } from './symbols';

export const lightTheme : Theme = {
    name : 'light',
    properties : {
        '--background': '#E7E2DC',
        '--on-background':'#888383',
        '--primary': '#A37F5B',

        '--box-color':'#DECEBF',
        '--blueboxcolor':'#DECEBF',

        '--darkforbutton':'#DECEBF',
        '--bottonColor':'#BEA28A',
        '--on-button':'#E7E2DC',
        '--logo':'#9A5D41',

        '--boxshadow':'3px 4px 7px rgba(0, 0, 0, 0.35),inset -1px -2px 12px rgba(117, 76, 36, 0.47)',

        '--transition': 'all 0.3s ease 0s',
        '--transform': 'scale(1.05)',
        '--boxshadow-hover':'0px 35px 77px -17px rgba(0, 0, 0, 0.64),inset -1px -2px 12px rgba(117, 76, 36, 0.47)',
        '--boxshadow-reverse':'3px 4px 7px rgba(0, 0, 0, 0.35),inset 1px -2px 12px rgba(117, 76, 36, 0.47)',
        //webdesign
        '--processus-webdesign':'url("/assets/images/webdesign/processuslight.png")',
        '--identity-webdesign':'url("/assets/images/webdesign/identitylight.png")',
        
        //ecommerce
        '--processus-ecommerce':'url("/assets/images/ecommerce/processuslight.png")',
        '--identity-ecommerce':'url("/assets/images/ecommerce/identitylight.png")',
        
        //graphic desgin
        '--processus-graphicdesign':'url("/assets/images/graphicdesign/processuslight.png")',
    
    }
};