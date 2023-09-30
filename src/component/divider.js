import React from 'react'

function Divider({className , ...rest}) {
  const dividerStyle=`mr-12 ml-12 mt-8 mb-4 h-[.5px] bg-stone-700  ${className ?? ""}`
  return (
    <div className={dividerStyle} {...rest}></div>
  )
}

export default Divider