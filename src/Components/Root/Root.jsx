import React from 'react';
import Form from '../Form/Form';
import Form2 from '../Form2/Form2';
import ControlledField from '../ControlledField/ControlledField';
import UnControlled from '../Uncontrolled/UnControlled';

const Root = () => {
    return (
        <div>
            <header>
                <h1 className='text-3xl text-center font-bold'>Exploring React Form</h1>
            </header>
            <main>
                {/* <Form2></Form2> */}
                {/* <ControlledField></ControlledField> */}
                <UnControlled></UnControlled>
            </main>
            <footer></footer>
        </div>
    );
};

export default Root;