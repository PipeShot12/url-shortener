import { useState } from 'react'
import styled from 'styled-components'
import mediaQuery from '../../mediaQuery'
export default function FormInput ({ onSubmit }) {
  const [input, setInput] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    setInput('')
    onSubmit(input)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder='Paste your link here...' value={input} onChange={e => setInput(e.target.value)} />
      <Button disabled={!input}>Drop!</Button>
    </Form>
  )
}
const Form = styled.form`
width: 100%;
display: flex;
margin-top:0.8em;
justify-content: center;
`
const Input = styled.input.attrs({ type: 'text' })`
border: none;
outline: none;
background-color: var(--secondary);
padding: 15px;
width: 70%;
color:#9D9D9D;
font-size: calc(10px + 1vmin);
::placeholder{
  color:#9D9D9D;
  font-weight:600;
  border-radius: 3px 0 0 3px;
}
@media (min-width:${mediaQuery.desktop}){
  width:50%;
}
`
const Button = styled.button`
width: 20%;
color:var(--text);
padding: 7px;
font-weight: bolder;
background-color: var(--primary);
outline: none;
border: none;
border-radius: 0 3px 3px 0;
cursor: pointer;
font-size: 1em;
&:active{
  transform: scale(1.03);
}
&:disabled{
  background-color: var(--info);
  color:var(--text);
  cursor: not-allowed;
}
@media (min-width:${mediaQuery.desktop}){
  width: 20%;
}
`
