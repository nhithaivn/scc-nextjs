import { Global, css } from '@emotion/react'

const GlobalStyles = () => (
    <>
        <Global styles={css`
          * {
          margin: 0;
          padding: 0;
          outline: 0; 
          border: 0;
          box-sizing: border-box;
        }
        *:focus {
          outline: 0;
        }
        html {
          font-size: 62.5%; //10px;
          height: 100%;
        }
        body {
          font: 1.6rem 'Roboto', sans-serif;
        }
        a {
          text-decoration: none;
          cursor: pointer;
        }
        ul {
          list-style: none;
        }
        button {
          cursor: pointer;
        }
        img {
          border: 0;
          display: block;
          height: auto;
          max-width: 100%;
        }
        .container {
          display: flex;
          width: 100%;
          height: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
          position: relative;
        }
        section {
          padding: 3rem 0;
        }
        @media (min-width: 768px){
          .container{
            max-width: 140rem;
          }
          section {
          padding: 6rem 0;
        }
        }
      `}/>
    </>
)

export default GlobalStyles