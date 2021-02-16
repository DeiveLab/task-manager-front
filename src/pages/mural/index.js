import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Header, Container, Task } from './styles'


const Mural = () => {
    return (
        <Container>
            <Header>
                <div>
                    <span>TASK .IO</span>
                </div>
            </Header>
            <Task/>
            <a>
                <FiPlus size={70}/>
            </a>
        </Container>
    )

}

export default Mural;