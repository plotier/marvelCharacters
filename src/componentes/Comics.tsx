import React from 'react';

interface DateItem {
    type: string;
    date: string;
}

interface ComicItem {
    title: string;
    dates?: DateItem[];
    thumbnail: {
        path: string;
        extension: string;
    };
}

interface ComicsProps {
    data: ComicItem[];
}

const Comics = ({ data }: ComicsProps) => {
    const getYearFromOnsaleDate = (dates: DateItem[] | undefined): string => {
        const onsaleDateItem = dates?.find(item => item.type === "onsaleDate");
        return onsaleDateItem ? new Date(onsaleDateItem.date).getFullYear().toString() : 'Unknown';
    };

    return (
        <div className="w-[960px] overflow-hidden py-12">
                 <h1 className="text-2xl font-bold  pb-2">COMICS</h1>

            <div className="flex gap-2 overflow-x-auto whitespace-nowrap custom-scrollbar">
                {data.map((comic, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="flex-grow overflow-hidden w-[179.2px] h-[268.8px]">
                            <img
                                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                alt={comic.title}
                                className="w-full h-full "
                            />
                        </div>
                        <div className='h-[60px] w-[179.2px]  p-2'>
                            <p className="font-roboto-condensed text-base align-middle 
                                          overflow-hidden text-ellipsis whitespace-normal line-clamp-2 leading-[100%] tracking-[0%]">
                                {comic.title}
                            </p>
                            <p className="text-black font-roboto-condensed font-normal text-[12px] leading-[100%] tracking-[0%] align-middle">
                                {getYearFromOnsaleDate(comic.dates)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comics;