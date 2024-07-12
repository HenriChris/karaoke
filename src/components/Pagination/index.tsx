import React, { useState } from 'react';
import { StyledNav, StyledUl, StyledLi, StyledButton, StyledInputContainer, StyledInputLabel, StyledInput } from './styles';

interface PaginationProps {
    songsPerPage: number;
    totalSongs: number;
    paginate: (pageNumber: number) => void;
}

function Pagination({ songsPerPage, totalSongs, paginate }: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleNext = () => {
        if (currentPage < pageNumbers.length) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            paginate(nextPage);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            paginate(prevPage);
        }
    };

    const handlePageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let page = parseInt(event.target.value, 10);
        if (!isNaN(page)) {
            page = Math.max(1, Math.min(page, pageNumbers.length));
            setCurrentPage(page);
            paginate(page);
        }
    };

    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledButton onClick={handlePrevious} disabled={currentPage === 1}>
                        Anterior
                    </StyledButton>
                </StyledLi>
                <StyledInputContainer>
                    <StyledInputLabel>Página:</StyledInputLabel>
                    <StyledInput type="number" value={currentPage} onChange={handlePageInput} />
                </StyledInputContainer>
                <StyledLi>
                    <StyledButton onClick={handleNext} disabled={currentPage === pageNumbers.length}>
                        Próxima
                    </StyledButton>
                </StyledLi>
            </StyledUl>            
        </StyledNav>
    );
};

export default Pagination;
