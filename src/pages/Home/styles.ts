import styled from "styled-components"



export const Title = styled.h1 `
  font-size: 48px;
  color: black;
  

`

export const Container = styled.div `
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px;

`

export const ContainerFiltros = styled.div `
  /* border: 1px solid blue; */

`

export const ContainerFilme = styled.div `
  /* border: 1px solid red; */
  padding: 20px;

`


export const ListaFilmes = styled.ul `

  margin: 60px 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 2rem;
  row-gap: 3rem;

`

export const CardFilme = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6e6ff;
  transition: all 0.3s;
  border-radius: 8px;
  box-shadow: 8px 2px 23px black;

  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
  }

  p {
    text-align: center;
    padding: 2px 10px;
  }


`

export const MediaCard = styled.div `
  
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  img {
    width: 100%;
    height: 280px;
    /* border-radius: 8px 8px 0 0; */
  }

  h3 {
    text-align: center;
  }

`

