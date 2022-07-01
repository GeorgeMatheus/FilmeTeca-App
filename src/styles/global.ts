import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    /* background: #f1f0f4; */
    /* background: #f0f0f5; */
    background: whitesmoke;
    color: black;
    -webkit-font-smoothing: antialiased;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: #10002b;
      border-radius: 30px;
    }

    ::-webkit-scrollbar-thumb {
      background: #fff;
      border-radius: 20px;

    }
    
    font-family: 'Roboto Slab', serif;
  
  }

  button {
    cursor: pointer;
  }

`;
