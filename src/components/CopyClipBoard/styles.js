import mediaQuery from "../../mediaQuery";
import styled from "styled-components";

export const CopyClipBoard = styled.div`
width: 90%;
padding:20px;
margin-top: 0.8em;
border-radius: 3px;
background-color: ${props => props.background ? 'var(--primary)' : 'var(--info)'};
display: flex;
justify-content: space-around;
align-items: center;
cursor: pointer;
&:active{
  ${props => props.background && 'transform: scale(1.03)'};
}
@media (min-width:${mediaQuery.desktop}){
  width:50%;
}
`
export const TextClipBoard = styled.p`
width:100%;
color:var(--text);
margin: 0;
font-size: 0.7em ;
text-align: center;
font-weight: bold;
text-align: center;
`
export const IconCopy = styled.i`
 width: 5%;
 font-size: 0.8em;
`
