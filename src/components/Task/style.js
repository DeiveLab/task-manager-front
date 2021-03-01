import styled, { css } from 'styled-components';

export const TaskContent = styled.div`
    margin: 5px auto;
    max-width:  690px;
    background-color: white;
    overflow-wrap: break-word;
    border-radius: 10px;
    padding: 16px 20px;

    display: flex;
    justify-content: center;

    p {
        min-width: 40%;
        flex: 1;
    }


    div {
        margin-left: 8px;

        button {
            border: none;

            & + button {
                ${props => props.completed && css`
                    color: green;
                `}
                margin-left: 5px;
            }
        }

    }

`;

export const TaskEdition = styled.div`
    margin: 5px auto;
    max-width:  690px;
    background-color: white;
    overflow-wrap: break-word;
    border-radius: 10px;
    padding: 16px 20px;
    
    
    form {
        display: flex;
        flex-direction: column;

        input {
            background: #f7edd2;
            border: 2px solid black;
            padding: 5px;
        }

        div {
            margin-top: 6px;

            button {
                background-color: #f58271;
                border: none;
                border-radius: 7px;

                padding: 10px;
                
                &:first-child {
                    background-color: #a6fa82;
                }

                & + button {
                    margin-left: 10px;
                }
            }

        }
    }
`;