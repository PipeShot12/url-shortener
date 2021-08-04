import { postUrl, getUrl } from '../services/urlService'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ClipBoard from '../components/CopyClipBoard'
import FormInput from '../components/FormInput'
import Modal from '../Modal/'
import { Container, Header, TitleSection, Title, Text, Background} from '../commonStyles/'

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
        <Modal 
        onClose={() => setShowModal(false)}
        icon={loading ? 'fas fa-spinner fa-spin' : icon}
        color={error ? 'red' : 'green'}
        iconSize='4em'

        titleSize='3em'
        titleColor={error ? 'red' : 'green'}
        titleText={msg}
        />}
      <Header>
        <h3 style={{ fontFamily: '"MonteCarlo", cursive' }}>drop</h3>
        <p>About</p>
        <p>Github</p>
      </Header>
      <TitleSection>
        <Title>drop</Title>
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
