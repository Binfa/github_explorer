import { createGlobalStyle } from 'styled-components';

import cat_binfos from '../assets/cat_binfos.png';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #F0F0F5 url(${cat_binfos}) no-repeat 65% top ;
        -webkit-font-smothing: antialiased;
        img {
            width: 120px;
            height: 120px;
          }
    }

    body, input, bottom {
        font: 16px Roboto, sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer
    }
`;
