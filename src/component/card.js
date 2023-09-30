import React, { useState } from 'react'
import Data from '../dataDetailes/data'

function Card({ timingsdata }) {

  const [details, setDetails] = useState(Data);

  return (
    <div className='flex justify-center'>

      {details?.map((item) => {
        return (
          <div className="w-[190px] h-[280px] bg-white rounded-md m-1 " key={item.id}>
            <img src={item?.img} alt="..." className='w-[250px] h-[120px] rounded-t-md' />
            <h1 className='mt-6 mr-3 text-xl'>{item?.Name}</h1>
          </div>
        )
      })}
      <div className='mt-[200px] absolute flex w-[900px] justify-between '>

        {timingsdata.map((element, index) => {
          return (
            <p key={index} className='text-4xl text-black'>{element}</p>
          )
        })
        }
      </div>



    </div>
  )
}

export default Card