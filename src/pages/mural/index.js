import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { FiPlus, FiLogOut } from 'react-icons/fi';

import { Header, ContentContainer, Task, TaskArea, Wrapper } from './styles'

import Modal from '../../components/Modal';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';


const Mural = () => {
    const [notes, setNotes] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const { signOut } = useAuth();
    const history = useHistory();
    const token = localStorage.getItem('@TaskManager:token');

    useEffect(()  => {
        api.get('/tasks', {
            headers: {
                Authorization: 'Bearer ' + token 
            }
        })
        .then(response => setNotes(response.data));
    }, [token]);

    const newTaskHandle = useCallback(() => {
        setShowModal(!showModal);
    }, [showModal]);

    const handleDeleteTask = useCallback(async (id) => {
        await api.delete(`/tasks/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token 
            }
        });

        const filteredNotes = notes.filter(note => note._id !== id);

        setNotes(filteredNotes);
    }, [token, notes]);

    const createTask = useCallback(async (description) => {
        const response = await api.post('/tasks',
                {
                    description
                    
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token 
                    },
                }
        );

        const newTask = response.data;

        setNotes([...notes, newTask]);
    }, [notes, token]);

    const handleLogOut = useCallback(async () => {
        await signOut();
        history.push('/');
    }, [signOut, history]);


    return (
        <Wrapper>
            <ContentContainer>
                <Header>
                    <div>
                        <span>TASK .IO</span>
                    </div>
                </Header>
                <TaskArea>
                    {notes.map( note => (
                        <Task key={note._id}>
                            <p>{note.description}</p>
                            <button onClick={() => handleDeleteTask(note._id)}>
                                <span>x</span>
                            </button>
                        </Task>
                    ))}
                </TaskArea>
                <button onClick={newTaskHandle}>
                    <FiPlus size={70}/>
                </button>
            </ContentContainer>
            <button type="button" onClick={handleLogOut}>
                <FiLogOut size={40}/>
            </button>
            <Modal showModal={showModal} close={newTaskHandle} createTask={createTask} />
        </Wrapper>
    )

}

export default Mural;