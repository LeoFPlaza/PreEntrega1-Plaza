import React from 'react'

export const ItemConteiner = ({ Welcome }) => {
    return (
        <div>
            <h2 className='text-gray-800 dark:text-gray-200 font-bold mt-4' >
                {Welcome}
            </h2>
        </div>
    )
}
