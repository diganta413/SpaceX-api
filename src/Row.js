import React from 'react'
import "./Row.css";
import {Link} from "react-router-dom";

function Row({ launchpad }) {
    return (
        <div className="row">
            <h1>{launchpad.name}</h1>
            <p className="details">{launchpad?.details}</p>
            <p className="status">Status: <span>{launchpad?.status}</span></p>
            <h3>Launches:</h3>
            {(launchpad.launches.length == 0)? (<h4>No Launches</h4>)
            :(
                <ul>
                    <li>{launchpad.launches[0] && (<Link to={"/launch/"+launchpad.launches[0]}>{launchpad.launches[0]}</Link>)}</li>
                    <li>{launchpad.launches[1] && (<Link to={"/launch/"+launchpad.launches[1]}>{launchpad.launches[1]}</Link>)}</li>
                    <li>{launchpad.launches[2] && (<Link to={"/launch/"+launchpad.launches[2]}>{launchpad.launches[2]}</Link>)}</li>
                </ul>
            )
            }
            
        </div>
    )
}

export default Row
