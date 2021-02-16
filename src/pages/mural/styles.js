import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    height: 90vh;
    margin: 0 auto;

    > a {
        position: fixed;
        bottom: 50px;
        right: 50px;
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

    @media(max-width: 1024px) {
        max-width: 1000px;
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

export const TaskArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;


    @media(max-width: 768px) {
        justify-content: center;
    }
`;

export const Task = styled.div`
    height: 190px;
    width: 190px;
    margin: 5px;
    background-color: white;
`;
