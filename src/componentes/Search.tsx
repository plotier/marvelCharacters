import React, { ChangeEvent } from 'react';
import TextInput from './TextInput';
import { useStateContext } from "../context/MarvelContext";

const Search = () => {

    const { state, dispatch } = useStateContext();
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setSearchCharacter(event.target.value);
    // };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_SEARCH_VALUE', payload: event.target.value });
    };

    return (
        <div className='h-[77px] flex flex-col justify-around '>
            <div className="border-b border-black w-full h-full flex flex-col justify-center" >
                <TextInput
                    value={state.searchValue}
                    onChange={handleChange}
                    placeholder="SEARCH A CHARACTER..."
                />
            </div>
            <div className='h-full flex flex-col justify-center font-roboto-condensed text-xs font-normal leading-[14.06px] tracking-normal'>
                XX RESULTS / RESULT
            </div>
        </div>
    );
};

export default Search;