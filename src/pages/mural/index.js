import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { FiPlus, FiLogOut, } from 'react-icons/fi';

import { Header, ContentContainer, TaskArea, Wrapper } from './styles'

import Modal from '../../components/Modal';
import Task from '../../components/Task';
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

    const deleteTask = useCallback(async (id) => {
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

    const updateTaskDescription = useCallback(async (id, description) => {
        await api.patch(`tasks/${id}`, 
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

        const newNotes = notes.map(note => {
            if (note._id === id) {
                note.description = description;
            }
            
            return note;
        });

        setNotes(newNotes);

    }, [token, notes]);

    const handleLogOut = useCallback(async () => {
        await signOut();
        history.push('/');
    }, [signOut, history]);

    const handleCompleted = useCallback(async (id, noteStatus) => {
        await api.patch(`tasks/${id}`, 
            {
                completed: noteStatus
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token 
                },
            }
        );

        const newNotes = notes.map(note => {
            if (note._id === id) {
                note.completed = true;
            }
            
            return note;
        });

        setNotes(newNotes);
        
    }, [token, notes]);


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
                        <Task 
                            note={note} key={note._id} 
                            handleCompleted={handleCompleted} 
                            updateTaskDescription={updateTaskDescription}
                            deleteTask={deleteTask}
                        />
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