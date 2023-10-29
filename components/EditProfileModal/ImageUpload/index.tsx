"use client"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

interface ImageUploadProps {
  onChange: (base64: string) => void
  label: string
  value?: string
  disabled: boolean
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  label,
  value,
  disabled
}) => {
  const [base64, setBase64] = useState(value)

  const handleChange = useCallback((base64: string) => {
    onChange(base64)
  }, [onChange])

  const handleDrop = useCallback((files: any) => {
      const file = files[0]
      const reader = new FileReader()
      reader.onload = (event: any) => {
        setBase64(event.target.result)
        handleChange(event.target.result)
      }
      reader.readAsDataURL(file)
  }, [handleChange])

  const { getRootProps, getInputProps } = useDropzone({ 
    maxFiles: 1, 
    onDrop: handleDrop, 
    disabled,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    } 
  })

  return (
    <div
      {...getRootProps({
        className: "mx-auto w-[80%] h-[54px] flex justify-center items-center text-white text-center border-2 border-dotted rounded-md border-neutral-700 cursor-pointer"
      })}
    >
      <input {...getInputProps()} />
      {base64 ? (
        <div className="flex items-center h-full justify-center overflow-hidden">
          <img
            src={base64}
            className="w-full object-cover"
            alt="Uploaded image"
          />
        </div>
      ) : (
        <p className="text-black">
          {label}
        </p>
      )}
    </div>
  )
}

export default ImageUpload