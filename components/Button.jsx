import React from 'react'

const Button = ({label,outline,onclick,}) => {
  return (
    <button onClick={onclick} className={` font-semibold w-[55%] text-center rounded-md p-2 cursor-pointer hover:bg-slate-500 ${outline?"border-slate-700 border-[1.2px] bg-slate-200 text-slate-900":"bg-slate-700 text-white"}`}>{label}</button>
  )
}

export default Button
