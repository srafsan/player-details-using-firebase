import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating';
import './PlayerDetails.css'

const Details = () => {
    const { playerDetails } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(dt => setData(dt))
    }, [])

    const player = data.filter(dt => dt.id == playerDetails)

    return (
        <div>
            <h1 className='text-center mt-5'>Player Details</h1>

            <div className='container'>
                <h1>Player Details</h1>
                <div className="row my-4">
                    <div className="col-md-6">
                        <img className='w-75' src={player[0]?.image} alt="" />
                    </div>
                    <div className="col-md-5 shadow p-3 mb-5 bg-body rounded">
                        <h5>Player# {player[0]?.id}</h5>
                        <h2>Name: {player[0]?.name}</h2>
                        <h3>{player[0]?.profession} Player</h3>
                        {/* <Rating initialRating={player[0]?.rating} emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating> */}

                        <Rating
                            initialRating={player[0]?.rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly
                        ></Rating>
                        <p>{player[0]?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;