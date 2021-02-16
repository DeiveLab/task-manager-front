import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
        border: none;

        svg {
        position: fixed;
        top: 20px;
        right: 10px;
        color: white;
        
        @media(max-width: 1024px) {
            top: 45px;
            right: 40px;
        }
        @media(max-width: 800px) {
            top: 80px;
        }

        @media(max-width: 768px) {
            height: 35px;
            top: 65px;
        }

        @media(max-width: 400px) {
            top: 60px;
        }

        }
    }

    

`;

export const ContentContainer = styled.div`
    max-width: 1200px;
    height: 90vh;
    margin: 0 auto;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: scroll;

    &::-webkit-scrollbar {
     display: none;
    }

    -ms-overflow-style: none; 
    scrollbar-width: none;  


    > button {
        position: absolute;
        bottom: 100px;
        right: 100px;
        color: white;
        border: none;

        border-radius: 50%;

        svg {
            position: fixed;
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
    width: 960px;
    padding: 0 30px;


    @media(max-width: 800px) {
        width: 750px;
    }
    @media(max-width: 425px) {
        width: 400px;
    }
    @media(max-width: 375px) {
        width: 300px;
    }
`;

export const Task = styled.div`
    margin: 5px auto;
    max-width:  690px;
    background-color: white;
    overflow-wrap: break-word;
    border-radius: 10px;
    padding: 16px 20px;
    transition: transform 0.2s;

    position: relative;

    /* display: flex;
    justify-content: space-between; */

    p {
        max-width: 480px;
        display: inline-block;

        @media(max-width: 425px) {
        max-width: 300px;
        }

       
    }

    &:hover {
        transform: translateX(13px);
    }

    button {
        border: none;
        position: absolute;
        top: 8px;
        right: 8px;
    }

`;
