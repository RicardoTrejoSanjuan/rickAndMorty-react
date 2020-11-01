import React from 'react';
import PropTypes from 'prop-types';

const ItemComponent = ({character}) => {

    return (
        <div className="card-box animate__animated animate__bounce animate__jello">
            <div className="card">
                <div className="cara">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="cara info">
                    <div className="containerImg">
                        <div className="titleCard">
                            <h5><b>{character.name}</b></h5>
                        </div>
                        <p><b>Species:</b> {character.species}</p>
                        <p><b>Status:</b> {character.status}</p>
                        <p><b>Gender:</b> {character.gender}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

ItemComponent.propTypes = {
    character: PropTypes.object.isRequired
}

export default ItemComponent;