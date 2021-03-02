import React, { useState, useCallback } from 'react';
import { FiSquare, FiCheckSquare, FiEdit2 } from 'react-icons/fi';

import { TaskContent, TaskEdition } from './style';

const Task = ({ note, handleCompleted, updateTaskDescription, deleteTask }) => {
    const [completed, setCompleted] = useState(note.completed);
    const [onEdition, setOnEdition] = useState(false);
    const [description, setDescription] = useState(note.description);

    const completeTask = useCallback(async () => {
        await handleCompleted(note._id, !completed);
        
        setCompleted(!completed);

    }, [handleCompleted, note._id, completed]);

    const handleOpenTask = useCallback(() => {
        setOnEdition(true);
    }, []);

    const handleSaveTask = useCallback(async () => {
        await updateTaskDescription(note._id, description);

        setOnEdition(false);
    }, [note._id, description, updateTaskDescription]);

    const handleDeleteTask = useCallback(async () => {
        await deleteTask(note._id);

        setOnEdition(false);
    }, [deleteTask, note._id]);

    return (
        <>
            {onEdition ? 
                <TaskEdition>
                    <form>
                        <input 
                            type="text" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <div>
                            <button onClick={handleSaveTask} type="button" >Salvar</button>
                            <button onClick={handleDeleteTask} type="button" >Excluir</button>
                        </div>
                    </form>
                </TaskEdition> 
                
                :

                <TaskContent completed={completed} >
                    <p>{note.description}</p>
                    <div>
                        <button onClick={handleOpenTask} >
                            <FiEdit2 size={18} />
                        </button>

                        <button onClick={completeTask} >
                            {completed ? <FiCheckSquare size={20} /> : <FiSquare size={20} />}
                        </button>
                    </div>
                </TaskContent>
            }
            
        </>
    )
}

export default Task;