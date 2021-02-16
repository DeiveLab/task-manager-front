import React, { useState, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';

import { Container, LoginCard, Logo, CenteredContent } from './styles';
import { useAuth } from '../../context/AuthContext';

import api from '../../services/api';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const { signIn } = useAuth();
    const history = useHistory();

    const submitHandler = useCallback(async (e) => {
        e.preventDefault();
        
        try {
            await api.post('/users', {
                email,
                password,
                name,
                age: parseInt(age, 10)
            });
    
            await signIn({email, password});
            history.push('/mural');

        } catch (err) {
            console.log(err);
        }
        
    }, [email, password, name, age, history, signIn]);

    return (
        <Container>
            <CenteredContent>
                <LoginCard>
                    <h1>TASK .IO</h1>
                    <span>
                        <a href='/'>
                        <FiLogIn />
                        Login
                        </a>
                    </span>
                    <form onSubmit={submitHandler}>
                        <input 
                            placeholder="Nome" 
                            type="text"
                            value={name} 
                            onChange={e => setName(e.target.value)}
                        />
                        <input 
                            placeholder="Idade" 
                            type="number"
                            min="1"
                            max="119"
                            value={age} 
                            onChange={e => setAge(e.target.value)}
                        />
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
                        <button type="submit">CADASTRAR</button>
                    </form>
                </LoginCard>
                <Logo>
                    <h1>
                        TASK .IO
                    </h1>
                </Logo>
            </CenteredContent>
        </Container>
    );
}

export default SignUp;