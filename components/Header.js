import { React } from 'react';

const Header = ({title = ' '}) => {

    return (      
    <div className='bg-secondary absolute transform -skew-y-6 top-0 h-48 min-w-full -mt-16 rounded-lg z-0'>{title}</div>)
}

export {
    Header
}