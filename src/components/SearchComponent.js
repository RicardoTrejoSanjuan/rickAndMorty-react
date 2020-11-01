import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SearchComponent = ({setCharacter}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 1) {
            setCharacter(characters => inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label key="inputValue"><span className="text-danger">*</span> Character: </label>
                <input
                    type="text"
                    className="form-control"
                    id="inputValue"
                    placeholder="Introduce One Character"
                    value={inputValue}
                    onChange={handleInputChange}
                    required
                />
            </div>
        </form>
    );
};

SearchComponent.propTypes = {
    setCharacter: PropTypes.func.isRequired
}

export default SearchComponent;