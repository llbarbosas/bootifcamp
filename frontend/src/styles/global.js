import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Arvo:400,400i,700,700i&display=swap');
    
    :root {
        --primary-color: #01579B;
    }


    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

        font-family: 'Lato';
    }

    li {
        list-style: none;
    }

    html, body, #root{
        height: 100%;
        background-color: #fafafa;
    }  
`;