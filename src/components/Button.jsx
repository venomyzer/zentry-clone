import React from 'react'

const Button = ({title, id, leftIcon, rightIcon, containerClass}) => {
    return (
        <div>
            <button
                id={id}
                className={`group relative z-10 w-fit rounded-full overflow-hidden cursor-pointer bg-violet-50 px-7 py-3 text-black 
                ${containerClass}`}>
                {leftIcon}
                <span className="relative inline-flex overflow-hidden font-general tex-xs uppercase">
                    {title}
                </span>
                {rightIcon}
            </button>
        </div>
    )
}
export default Button
