import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    height: 90vh;
    margin: 0 auto;
    position: relative;

    > a {
        position: absolute;
        bottom: 16px;
        right: 16px;
        text-decoration: none;
        color: white;

        svg {
            background-color: #00A572;
            border-radius: 50%;
            padding: 10px;
        }

        &:hover {
            cursor: pointer;
        }
    }
`;

export const Header = styled.div`
    color: white;
    font-family: 'Orbitron', sans-serif;
    padding-top: 30px;
    padding-bottom: 30px;

    div{
        font-size: 30px;
        border-bottom: solid 1px gray;
    }

    span{
        margin-left: 20px;
    }
`;

export const Task = styled.div`
    height: 200px;
    width: 200px;
    background-color: white;
`;
