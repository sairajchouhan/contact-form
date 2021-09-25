import { useState } from 'react'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
export default function Home() {
  const [input, setInput] = useState({ name: '', email: '', message: '' })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(input)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInput((prevInput) => ({ ...prevInput, [e.target.name]: e.target.value }))
  }

  return (
    <div className="w-full h-screen bg-blue-50">
      <div className="px-3 pt-20">
        <form
          className="flex flex-col items-center w-full mx-auto sm:w-1/2 md:w-1/2 xl:w-1/3"
          onSubmit={handleSubmit}
        >
          <Input
            value={input.name}
            onChange={handleChange}
            id="name"
            name="name"
            label="Name"
            placeholder="Your Name"
          />
          <Input
            value={input.email}
            onChange={handleChange}
            id="email"
            name="email"
            label="Email"
            placeholder="jhondoe@gmail.com"
          />
          <TextArea
            value={input.message}
            onChange={handleChange}
            id="message"
            name="message"
            label="Message"
            placeholder="Your message"
          />
          <button
            className="w-full py-2 mt-3 text-lg text-white bg-purple-500 rounded-md outline-none active:bg-purple-600 focus:ring-2 focus:ring-purple-400"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
