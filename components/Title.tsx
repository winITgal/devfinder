import React from 'react'
import ThemeToggler from './ThemeToggler'


const Title = () => {
    return (
        <div className='flex justify-between items-center mb-5'>
            <h1 className='font-bold'>devfinder</h1>
            <ThemeToggler />
        </div>
    )
}

export default Title
