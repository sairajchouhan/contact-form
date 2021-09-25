export const validate = ({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) => {
  const errors: { name?: string; email?: string; message?: string } = {}
  if (!name || name.trim() === '') {
    errors.name = 'Name is required'
  }
  if (!email || email.trim() === '') {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address'
  }
  if (!message || message.trim() === '') {
    errors.message = 'Message is required'
  }
  return errors
}
