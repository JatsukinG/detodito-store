import React from 'react'

const InputField = ({title, ...props}: any) => {
  return (
      <div className="flex flex-col">
        <p className="text-violet-800 text-xs font-bold mb-2">
          {title}
        </p>
        <input className="w-full text-xs mb-4 border-2 p-2 items-center" {...props}/>
      </div>
  )
}

export default InputField