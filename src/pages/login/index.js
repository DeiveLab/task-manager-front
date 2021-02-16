import React, { useState, useCallback } from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, LoginCard, Logo, CenteredContent } from './styles';

import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    const submitHandler = useCallback(async (e) => {
        try {
            e.preventDefault();
            await signIn({email, password});
        } catch (error) {
            console.log(error);
        }

    }, [email, password, signIn]);

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
                </LoginCard>
            </CenteredContent>
        </Container>
    );
}

export default Login;