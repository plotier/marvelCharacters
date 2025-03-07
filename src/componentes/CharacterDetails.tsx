import React from 'react'
import FavButton from './FavButton';


interface CharacterDetailsProps {
    characterData: {
      id: number;
      name: string;
      description: string;
      thumbnail: {
        path: string;
        extension: string;
      };
    };
  }
const CharacterDetails = ({ characterData }: CharacterDetailsProps) => {
    return (
        <div className='flex justify-center items-center bg-black border-t border-gray-800 w-full' >
            <div className="w-[21.16%] items-center bg-red-200 p-0 ">
                <img
                    src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
                    alt={characterData.name}
                    className="w-80 h-80 "
                />
            </div>
            <div className=' w-[42.33%] p-12 pr-0 text-white'>
                <div className='flex justify-between mb-6'>
                    <p className="font-roboto-condensed font-bold text-4xl leading-none tracking-normal uppercase"
                    >{characterData.name}</p>
                    <FavButton characterData={characterData} className={''}/>
                </div>
                <p className=''>{characterData.description}</p>
            </div>

        </div>
    )
}

export default CharacterDetails