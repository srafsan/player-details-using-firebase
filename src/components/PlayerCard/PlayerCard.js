import React from 'react';
import { Link } from 'react-router-dom';

const PlayerCard = ({ player }) => {
    const { name, image, profession, description } = player;

    return (
        <div className='col-md-4'>
            <div class="card" style={{ width: "18rem" }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h2 class="card-title">Profession {profession}</h2>
                    <p class="card-text">{description}</p>
                    <Link to={`details/${player.id}`} class="btn btn-primary">Details</Link>
                </div>
            </div>
        </div >
    );
};

export default PlayerCard;