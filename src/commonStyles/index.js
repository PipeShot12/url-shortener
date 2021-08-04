import styled from 'styled-components'
import bg from '../assets/bgPink.png'
export const Container = styled.div`
min-height: 100vh;
width:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position:relative;
padding:0;
margin:0;
font-size: calc(10px + 2vmin);
`
export const Header = styled.div`
display:flex;
width: 80%;
justify-content: space-around;
align-items: center;
line-height: 0px;
position: fixed;
top: 0;
left: 10%;
`
export const TitleSection = styled.div`
text-align:center;
width: 90%;
`
export const Title = styled.h1`
color:var(brand);
font-family: 'MonteCarlo', cursive;
margin: 0;
padding: 0;
font-size: 4em;
line-height: 1em;
margin-bottom: 0.2em;
`
export const Text = styled.p`
color:var(--text);
margin: 0;
text-align: center;
font-weight: bold;
`

export const Background = styled.div`
background-image:url(${bg});
z-index: 10;
width:100vw;
height: 18vh;
position:absolute;
bottom: 0;
background-size: cover;
background-repeat: no-repeat;
@media (min-width:700px ) and (max-width: 1000px){
  display: none;
}
`


