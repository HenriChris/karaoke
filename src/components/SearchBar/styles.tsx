import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    padding: 12px;
    margin: 20px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;

    &:focus {
        border-color: #007BFF;
        outline: none;
    }
`;
