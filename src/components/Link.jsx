import React from 'react';



const Link = ({name , path}) => {
    return (
       <li className='px-2'>
            <a href={path}>{name}</a>
       </li>
    );
};

export default Link;