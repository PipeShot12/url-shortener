import { CopyClipBoard, TextClipBoard, IconCopy} from './styles'
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
      <IconCopy className='fas fa-copy' />
    </CopyClipBoard>
  )
}
