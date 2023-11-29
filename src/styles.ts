import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  branco: '#fff6e9',
  preto: '#000000',
  cinza: '#7d7d89',
  vermelho: 'red',
  verde: 'green'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    font-family: 'Quicksand', sans-serif;
    box-sizing: border-box;
    }
  body{
    background-color: ${cores.branco};
    color: ${cores.cinza};
    padding-top:40px;
    }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

export const Form = styled.form`
  display: block;
  text-align: justify;

  div {
    display: flex;
    margin-bottom: 8px;
    label {
      margin-right: 8px;
    }
    input {
      border-radius: 8px;
      text-align: center;
    }
  }
`
