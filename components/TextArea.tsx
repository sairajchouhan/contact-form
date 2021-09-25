interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string
  name: string
  label: string
  placeholder: string
  type?: string
  error?: boolean
  errorMessage?: string
}

const TextArea = ({
  id,
  name,
  label,
  placeholder,
  error,
  errorMessage,
  ...props
}: TextAreaProps) => {
  return (
    <div className="w-full">
      <label className="block text-lg" htmlFor={id}>
        {label}
      </label>
      <textarea
        {...props}
        className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-purple-500"
        name={name}
        id={id}
        rows={5}
        style={{ resize: 'none' }}
        placeholder={placeholder}
      ></textarea>
      {error && <p className="text-xs italic text-red-500">*{errorMessage}</p>}
    </div>
  )
}

export default TextArea
