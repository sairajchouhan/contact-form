interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  label: string
  placeholder: string
  error?: boolean
  errorMessage?: string
}

const Input = ({
  id,
  name,
  label,
  placeholder,
  error = false,
  errorMessage = '',
  ...props
}: InputProps) => {
  return (
    <div className="w-full mb-3">
      <label className="block text-lg" htmlFor={id}>
        {label}
      </label>
      <input
        {...props}
        autoComplete="off"
        name={name}
        className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-purple-500"
        type="text"
        id={id}
        placeholder={placeholder}
      />
      {error && <p className="mt-1 text-xs italic text-red-500">*{errorMessage}</p>}
    </div>
  )
}

export default Input
