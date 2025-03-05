import React, { useState } from "react";
import Icon from "./Icon";

type CharacterCardProps = {
    name: string;
    photoUrl: string; 
    description?: string; 
};

function CharacterCard({ name, photoUrl, description }: CharacterCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className="w-[188.571px] h-[245.971px] min-w-[172.5px] overflow-hidden bg-black flex flex-col relative group clip-bottom-right"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <div className="flex-grow overflow-hidden border-l-pink-50 relative">
                <img
                    src={photoUrl}
                    alt={name}
                    className="w-full h-full "
                />
            </div>
            <div className="bg-marvel-red h-[5.38px] bottom-0 left-0 w-full transform origin-top transition-all duration-[300ms] ease-in-out group-hover:scale-y-[20] p-0 m-0"></div>
            <div className="h-14 pb-6 p-4 flex items-center justify-between relative ">
                <p className="text-white">{name}</p>
                <Icon name={'whiteHearth'} className="h-[12px] w-[10px]" />
            </div>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[13px] border-r-white border-t-[13px] border-t-transparent"></div>

        </div>
    );
}

export default CharacterCard;