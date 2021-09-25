import { useState } from 'react'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import { validate } from '../utils/validate'
import Image from 'next/image'

interface IValues {
  name: string
  email: string
  message: string
}

interface IErrors extends Partial<IValues> {}

export default function Home() {
  const [values, setValues] = useState<IValues>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<IErrors>({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errors = validate(values)
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors)
    }
    setErrors({})
    setLoading(true)
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      if (res.ok) {
        setValues({ name: '', email: '', message: '' })
      }
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({ ...prevInput, [e.target.name]: e.target.value }))
  }

  return (
    <div className="w-full h-screen bg-blue-50">
      <div className="px-3 pt-20">
        <form
          className="flex flex-col items-center w-full mx-auto sm:w-1/2 md:w-1/2 xl:w-1/3"
          onSubmit={handleSubmit}
        >
          <Input
            value={values.name}
            onChange={handleChange}
            id="name"
            name="name"
            label="Name"
            placeholder="Your Name"
            error={!!errors.name}
            errorMessage={!!errors.name ? errors.name : ''}
          />
          <Input
            value={values.email}
            onChange={handleChange}
            id="email"
            name="email"
            label="Email"
            placeholder="jhondoe@gmail.com"
            error={!!errors.email}
            errorMessage={!!errors.email ? errors.email : ''}
          />
          <TextArea
            value={values.message}
            onChange={handleChange}
            id="message"
            name="message"
            label="Message"
            placeholder="Your message"
            error={!!errors.message}
            errorMessage={!!errors.message ? errors.message : ''}
          />
          <button
            className="w-full py-2 mt-6 text-lg text-white bg-purple-500 rounded-md outline-none active:bg-purple-600 focus:ring-2 focus:ring-purple-400 disabled:bg-opacity-60 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {!loading ? (
              'Submit'
            ) : (
              <div className="flex items-center justify-center w-full h-full ">
                <Image src="/loader.svg" className="animate-spin" width="30" height="30" />
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
