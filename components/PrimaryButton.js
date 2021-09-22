import React from 'react';


const PrimaryButton = ({onClick, children}) => {

    return (
    <button className="rounded-full p-2 bg-primary text-white font-body px-6" onClick={onClick}>
        {children}
    </button>)

}

export {
    PrimaryButton
}