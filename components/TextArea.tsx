interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string
  name: string
  label: string
  placeholder: string
  type?: string
}

const TextArea = ({ id, name, label, placeholder, ...props }: TextAreaProps) => {
  return (
    <div className="w-full">
      <label className="block text-lg" htmlFor={id}>
        {label}
      </label>
      <textarea
        {...props}
        className="w-full border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-purple-500"
        name={name}
        id={id}
        rows={5}
        style={{ resize: 'none' }}
        placeholder={placeholder}
      ></textarea>
    </div>
  )
}

export default TextArea
