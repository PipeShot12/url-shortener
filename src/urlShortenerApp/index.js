import { postUrl, getUrl } from '../services/urlService'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import bg from '../assets/bgPink.png'
import ClipBoard from '../components/CopyClipBoard'
import FormInput from '../components/FormInput'
import Modal from '../Modal/'
import styled from 'styled-components'

export default function UrlShortenerApp () {
  const [error, setError] = useState(false)
  const [icon, setIcon] = useState('')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [urlShort, setUrlShort] = useState('')
  const params = useParams()['0']?.split('/')[0]

  useEffect(() => {
    (async () => {
      if (params) {
        const req = await getUrl(params)
        if (req.ok) {
          const res = await req.json()
          window.location.href = `https://${res}`
        } else {
          const errorRes = await req.json()
          setShowModal(true)
          setError(true)
          setIcon('fas fa-times')
          setMsg(errorRes?.error)
          setTimeout(() => {
            setShowModal(false)
            setError(false)
            setMsg('')
          }, 4000)
        }
      }
    })()
  }, [])
  const handleSubmit = async (input) => {
    setLoading(true)
    setShowModal(true)
    const req = await postUrl(input)
    if (req.ok) {
      const res = await req.json()
      console.log(res)
      setIcon('fas fa-check-double')
      setLoading(false)
      setTimeout(() => {
        setShowModal(false)
      }, 1500)
      setUrlShort(res?.url_short)
    } else {
      const resError = await req.json()
      setError(true)
      setIcon('fas fa-times')
      setLoading(false)
      setMsg(resError?.error)
      setUrlShort('')
      setTimeout(() => {
        setShowModal(false)
        setError(false)
        setMsg('')
      }, 4000)
    }
  }

  return (
    <Container>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          <IconModal className={loading ? 'fas fa-spinner fa-spin' : icon} color={error ? 'red' : 'green'} />
          <TitleModal color={error ? 'red' : 'green'}>{msg}</TitleModal>
        </Modal>}
      <Header>
        <h3 style={{ fontFamily: '"MonteCarlo", cursive' }}>drop.je</h3>
        <p>About</p>
        <p>Github</p>
      </Header>
      <TitleSection>
        <Title>drop.je</Title>
        <Text>
          Most link shorteners do too much.
        </Text>
        <Text>
          This one just makes your links shorter.
        </Text>
      </TitleSection>
      <FormInput onSubmit={handleSubmit} />
      <ClipBoard urlShort={urlShort} />
      <Background />
    </Container>

  )
}

const Container = styled.div`
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
const Header = styled.div`
display:flex;
width: 80%;
justify-content: space-around;
align-items: center;
line-height: 0px;
position: fixed;
top: 0;
left: 10%;
`
const TitleSection = styled.div`
text-align:center;
width: 90%;
`
const Title = styled.h1`
color:var(brand);
font-family: 'MonteCarlo', cursive;
margin: 0;
padding: 0;
font-size: 4em;
line-height: 1em;
margin-bottom: 0.2em;
`
const Text = styled.p`
color:var(--text);
margin: 0;
text-align: center;
font-weight: bold;
`

const Background = styled.div`
background-image:url(${bg});
z-index: 10;
width:100vw;
height: 18vh;
position:absolute;
bottom: 0;
background-size: cover;
background-repeat: no-repeat;

`
const IconModal = styled.i`
color:${({ color }) => color};
font-size:4em;
`
const TitleModal = styled(Title)`
color: ${({ color }) => color};
font-size: 3em;
`
