import styled, { css } from 'styled-components'

export const Container = styled.div`
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;

    > button{
        color: gray;
        font-size: 40px;
        border: none;
        background-color: transparent;
        position: fixed;
        top: 30px;
        right: 30px;
    }
`;

export const ModalContent = styled.div`
    form {
        display: flex;
        flex-direction: column;
        
        input {
            border: none;
            border: 2px solid white;
            padding: 10px 16px;
            margin-bottom: 16px;

            ${props => props.isFocused && css`
                border-color: #00A572;
            `}

        }
        
        button{
            border-radius: 10px;
            border: none;
            color: white;
            background-color: #00A572;
            padding: 10px;
        }
    }
`;