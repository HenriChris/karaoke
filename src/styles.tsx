import styled from 'styled-components';

export const StyledContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

export const StyledButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    button {
        margin: 0 10px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        background-color: #007BFF;
        color: white;
        transition: background-color 0.3s;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

export const StyledButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #007BFF;
    color: white;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;
