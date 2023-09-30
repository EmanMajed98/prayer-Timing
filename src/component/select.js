import React from 'react'

function Select({ handleChangeCity, nameTocity }) {

  return (
    <div className='flex justify-center'>
      <select className='w-[300px] h-[40px] bg-stone-700 text-white rounded-md mt-6 ' onChange={handleChangeCity}>
        {nameTocity.map((items) => {
          return (
            <option key={items.APIName} value={items.APIName}>{items.DisplayName}</option>
          )
        })}

      </select>
    </div>
  )
}

export default Select