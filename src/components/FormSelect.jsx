import React from 'react'

function FormSelect({label, name, defaultValue, size, list}) {
  return (
    <div className=' form-control'>
        <label htmlFor={name} className='label'>
            <span className='capitalize label-text'>{label}</span>
        </label>

        <select
            name={name}
            id={name}
            className={`select select-bordered ${size}`}
            defaultValue={defaultValue}
        >
            {list.map((item) => {
                return <option key={item} value={item} >
                    {item}
                </option>
            })}
        </select>
    </div>
  )
}

export default FormSelect