import React, { useEffect, useState } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AllPlayers = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then((dt) => setPlayers(dt))
    }, [])

    return (
        <div className='container text-center'>
            <h1 className='mt-5 mb-5 '>List of Players</h1>

            <div className="row">
                {
                    players.map((player) => <PlayerCard key={player.id} player={player} />)
                }
            </div>
        </div>
    );
};

export default AllPlayers;