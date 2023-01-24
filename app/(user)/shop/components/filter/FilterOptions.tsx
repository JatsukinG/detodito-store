//@ts-nocheck
import React from 'react'

const filterOptions = [
    'Prendas',
    'Cinturones',
    'Zapatos',
    'Accesorios',
    'Bolsos',
    'Precio'
]

const FilterOptions = () => {

  return (
      <div className="w-60 p-8">
        <h2 className="text-2xl text-gray-800 mb-4">Category</h2>
        <div className="flex flex-col">
          {
            filterOptions.map(option=>(
                <div className="flex items-center border-b text-gray-600 gap-4">
                  <input type="checkbox" id={option} name="filter"/>
                  <label className="w-full text-sm py-2" htmlFor={option}>{option}</label>
                </div>
            ))
          }
        </div>
      </div>
  )
}

export default FilterOptions