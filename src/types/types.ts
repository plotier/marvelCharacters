export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

export interface FavoriteIconProps {
    className: string;
    characterData: Character;
}

export interface DateItem {
    type: string;
    date: string;
}

export interface ComicItem {
    title: string;
    dates?: DateItem[];
    thumbnail: {
        path: string;
        extension: string;
    };
}

export interface ComicsProps {
    data: ComicItem[];
}

export interface SearchProps {
    resultsLength: number;
}

export interface TextInputProps {
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export interface IconProps  {
    name: string;
    size ?: number;
    className ?: string;
    width ?: string;
    height ?: string;
};