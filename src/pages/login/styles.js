import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CenteredContent = styled.div`
    box-shadow: 3px 6px 2px 2px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    display: flex;
    max-width: 760px;
    margin: 0 20px;
`;

export const Logo = styled.div`
    flex: 1;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    
    
    border-radius: 10px 0 0 10px;

    background-image: linear-gradient(to right, #2f4255 , #1f2c38 ); 

    h1 {
        margin: 0 20px;
        font-family: 'Orbitron', sans-serif;
    }

    @media(max-width: 740px) {
        display: none;
      }
`;

export const LoginCard = styled.div`
    border-radius: 0 10px 10px 0;
    background-color: white;
    height: 500px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    
    h1{
        position: absolute;
        top: 60px;
        text-align: center;
        display: none;
        color: #1f2c38;
        font-family: 'Orbitron', sans-serif;
    }
    
    span{
        position: absolute;
        top: 8px;
        right: 8px;

        a{
            display: flex;
            align-items: center;
            color: #1f2c38;
            transition: color 0.2s;
            
            svg {
                margin-right: 8px;
            }
        }
    }

    form{
        text-align: center;
        
    }

    input{
        display: block;
        background: transparent;
        padding: 16px;
        border: none;
        border-bottom: 1px solid grey;
        width: 100%;
        
        & + input {
            margin-top: 8px;
        }
        
    }

    button {
        border: 0.2px solid gray;
        border-radius: 6px;
        background-image: linear-gradient(to right, #2f4255 , #1f2c38 ); 
        color: white;
        margin-top: 20px;
        padding: 20px;
        width: 298px;
        transition: all ease 0.5s;
        
       
    }

    @media(max-width: 740px) {
        h1{
            display: block;
        }
        border-radius: 10px;
    }
    @media(max-width: 470px) {
        height: 500px;
        width: 320px;

        input{
            width: 250px;
        }

        button{
            width: 250px;
        }
    }

`;

export const WrongLog = styled.div`
    color: red;
    position: absolute;
    bottom: 30px;
    left: 10px;
`;