import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import "./Launch.css";

function Launch() {
    const { launchid } = useParams();
    const [launch,setlaunch] = useState([]);
    
    useEffect(() => {
        async function get() {
            await  axios.get(`https://api.spacexdata.com/v4/launches/${launchid}`)
            .then(response => {
                setlaunch(response.data)})
            .catch((err) => console.log(err))
        }
        get();

        
    }, [])

    

    return (
        <div className="launch">
            <h1>Launch Name: {launch?.name}</h1>
            <p>{launch?.details}</p>
            <h3>Date: {launch?.date_local}</h3>
            <h4>{launch.cores && launch?.cores[0]?.reused}</h4>
        </div>
    )
}

export default Launch
