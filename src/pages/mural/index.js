import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Header, Container, Task, TaskArea } from './styles'


const Mural = () => {
    return (
        <Container>
            <Header>
                <div>
                    <span>TASK .IO</span>
                </div>
            </Header>
            <TaskArea>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>  
            </TaskArea>
            <a href="#/">
                <FiPlus size={70}/>
            </a>
           
        </Container>
    )

}

export default Mural;