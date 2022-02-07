import React, { useState } from 'react';
import PropTypes from 'prop-types';

InputField.propTypes = {
    onHobbySubmit: PropTypes.func,
};

InputField.defaultProps = {
    onHobbySubmit: null,
};

function InputField(props) {
    const { onHobbySubmit } = props;
    const [value, setValue] = useState('');

    const handleInputHobbyClick = (e) => {
        setValue(e.target.value);
    };
    
    const handleHobbyFormSubmit = (e) => {
        e.preventDefault();

        if (!value) return;

        onHobbySubmit(value);
        setValue('');
    };
    return (
        <form onSubmit={(e) => handleHobbyFormSubmit(e)}>
            <input
                onChange={(e) => handleInputHobbyClick(e)}
                type="text"
                value={value}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default InputField;
