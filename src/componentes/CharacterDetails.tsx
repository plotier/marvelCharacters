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
        <div className='flex justify-center items-center bg-black border-t border-gray-800 w-full relative '>
          <div className='flex flex-col sm:flex-row max-w-[960px] w-full '>
            
            <div className='sm:max-w-[320px] w-full items-center bg-red-200 p-0'>
              <img
                src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
                alt={characterData.name}
                className="w-full sm:h-80"
              />
            </div>
      
            <div className='max-w-[640px] w-full my-auto p-4 sm:p-12 lg:pr-0 text-white'>
              <div className='flex justify-between mb-6'>
                <p className="font-roboto-condensed font-bold text-4xl leading-none tracking-normal uppercase">
                  {characterData.name}
                </p>
                <FavButton characterData={characterData} className={'cursor-pointer'} />
              </div>
              <p>{characterData.description}</p>
            </div>
      
          </div>
          <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[24px] border-r-white border-t-[24px] border-t-transparent"></div>
        </div>
        
      )
      
}

export default CharacterDetails