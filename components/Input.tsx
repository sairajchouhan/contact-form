interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  label: string
  placeholder: string
}

const Input = ({ id, name, label, placeholder, ...props }: InputProps) => {
  return (
    <div className="w-full mb-3">
      <label className="block text-lg" htmlFor={id}>
        {label}
      </label>
      <input
        {...props}
        autoComplete="off"
        name={name}
        className="w-full border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-purple-500"
        type="text"
        id={id}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
