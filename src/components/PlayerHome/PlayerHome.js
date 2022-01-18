import React, { useEffect, useState } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const HomePlayer = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then((dt) => setPlayers(dt))
    }, [])

    return (
        <div className='container text-center'>
            <div className="row">
                {
                    players.slice(0, 6).map((player) => <PlayerCard key={player.id} player={player} />)
                }
            </div>
        </div>
    );
};

export default HomePlayer;