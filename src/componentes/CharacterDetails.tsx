import React from 'react'
import FavButton from './FavButton';


interface CharacterDetailsProps {
    name: string;
    photoUrl: string;
    description: string;
    id: string;
}
const CharacterDetails = ({ name, photoUrl, description, id }: CharacterDetailsProps) => {
    return (
        <div className='flex justify-center items-center bg-black border-t border-gray-800 w-full' >
            <div className="w-[21.16%] items-center bg-red-200 p-0 ">
                <img
                    src={photoUrl}
                    alt={name}
                    className="w-80 h-80 "
                />
            </div>
            <div className=' w-[42.33%] p-12 pr-0 text-white'>
                <div className='flex justify-between mb-6'>
                    <p className="font-roboto-condensed font-bold text-4xl leading-none tracking-normal uppercase"
                    >{name}</p>
                    <FavButton id={id} className={''}/>
                </div>
                <p className=''>{description}</p>
            </div>

        </div>
    )
}

export default CharacterDetails