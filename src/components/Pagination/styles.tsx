import styled from 'styled-components';

export const StyledNav = styled.nav`
    margin-top: 20px;
`;

export const StyledUl = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
`;

export const StyledLi = styled.li`
    margin: 0 5px;
`;

export const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const StyledInputContainer = styled.div`
    margin: 0 10px;
`;

export const StyledInputLabel = styled.label`
    margin-right: 5px;
`;

export const StyledInput = styled.input`
    width: 50px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
`;
