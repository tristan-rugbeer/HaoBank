import React from 'react'

const Button = (props: { styles: string }) => {
  return (
    <button type='button' className={`w-44 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${props.styles}` }>
        Get started
    </button>
  )
}

export default Button