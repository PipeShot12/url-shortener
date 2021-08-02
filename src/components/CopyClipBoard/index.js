import styled from 'styled-components'
import mediaQuery from '../../mediaQuery'

export default function ClipBoard ({ urlShort }) {
  const handleCopy = () => {
    if (urlShort) {
      navigator.clipboard.writeText(`drop-shortener.netlify.app/${urlShort}`)
    }
  }
  return (
    <CopyClipBoard onClick={handleCopy} background={urlShort}>
      <TextClipBoard>{urlShort
        ? `drop-shortener.netlify.app/${urlShort}`
        : 'drop-shortener.netlify.app/<your-url>'}
      </TextClipBoard>
      <i className='fas fa-copy' style={{ width: '5%', fontSize: '25px' }} />
    </CopyClipBoard>
  )
}
const CopyClipBoard = styled.div`
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
const TextClipBoard = styled.p`
width:100%;
color:var(--text);
margin: 0;
text-align: center;
font-weight: bold;
text-align: center;
`
