import { useState } from 'react'
import { Form, Input, Button} from './styles'
export default function FormInput ({ onSubmit }) {
  const [input, setInput] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    setInput('')
    onSubmit(input?.trim())
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder='Paste your link here...' value={input} onChange={e => setInput(e.target.value)} />
      <Button disabled={!input}>Drop!</Button>
    </Form>
  )
}
