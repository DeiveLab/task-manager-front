import React, { useState, useCallback } from 'react';
import { Container, ModalContent } from './style';

const Modal = ({ showModal, close, createTask }) => {
    const [description, setDescription] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        try {

            await createTask(description);

            close();

            setDescription('');
            
        } catch (error) {
            console.log(error);
        }

    }, [description, close, createTask]);

    return(
            showModal?
                <Container>
                    <button onClick={close}>X</button>
                    <ModalContent isFocused={isFocused}>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Sua Tarefa"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                            <button type="submit">CRIAR</button>
                        </form>
                    </ModalContent>
                </Container> : <></>
        )
};

export default Modal;