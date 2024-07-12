import React from 'react';
import { StyledInput } from './styles';

interface SearchBarProps {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <StyledInput
            type="text"
            placeholder="Busque por música ou autor"
            onChange={handleSearch}
        />
    );
};

export default SearchBar;
