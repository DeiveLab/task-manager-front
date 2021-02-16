import React, { useState, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';

import { Container, LoginCard, Logo, CenteredContent, WrongLog } from './styles';

import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isErrored, setIsErrored] = useState(false);

    const { signIn } = useAuth();
    const history = useHistory();

    const submitHandler = useCallback(async (e) => {
        try {
            e.preventDefault();
            await signIn({email, password});
            history.push('/mural');
        } catch (error) {
            setIsErrored(true);
        }

    }, [email, password, signIn, history]);

    return (
        <Container>
            <CenteredContent>
                <Logo>
                    <h1>
                        TASK .IO
                    </h1>
                </Logo>
                <LoginCard>
                    <h1>TASK .IO</h1>
                    <span>
                        <a href='/signup'>
                        <FiLogIn />
                        Cadastre-se
                        </a>
                    </span>
                    <form onSubmit={submitHandler}>
                        <input 
                            placeholder="E-mail" 
                            type="email" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                            placeholder="Senha" 
                            type="password"
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit">ENTRAR</button>
                    </form>
                    {isErrored &&
                            <WrongLog>
                                <p>Usuário ou senha incorreta*</p>
                            </WrongLog>
                    }
                </LoginCard>
            </CenteredContent>
        </Container>
    );
}

export default Login;