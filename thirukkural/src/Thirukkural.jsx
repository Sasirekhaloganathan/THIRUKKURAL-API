import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Thirukkural = () => {
    const [thirukkurals, setThirukkurals] = useState([])

    useEffect(() => {
        axios.get('https://thirukkural-api-dycp.onrender.com')
            .then(results => setThirukkurals(results.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('https://thirukkural-api-dycp.onrender.com/deletethirukkural/' + id)
            .then(results => {
                console.log(results)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <nav class="navbar navbar-light bg-dark" data-bs-theme="dark">
                <div class="navbar-brand container" >
                    <img src="https://www.bing.com/images/search?view=detailV2&ccid=zptzsjfQ&id=CBEB9688CE5DAAE5B53166A6CF395256BD9C3E0A&thid=OIP.zptzsjfQWeSIRcSKZOQdvAHaJI&mediaurl=https%3a%2f%2fwww.rohitghai.com%2fwp-content%2fuploads%2f2020%2f07%2fThiruvalluvar-standing-831x1024.jpg&exph=1024&expw=831&q=thiruvalluvar+images&simid=607992337105698644&FORM=IRPRST&ck=F55C2830C8ACCB820EE400F1C2FB5459&selectedIndex=48&itb=0" width="250px" height="250px" alt="" />
                    "வள்ளுவன் தன்னை உலகினுக்கே தந்து வான்புகழ் கொண்டது தமிழ்நாடு"<br></br>
                    <em class="m-1"> Unlock timeless wisdom with our Thirukkural API – where ancient insights meet modern innovation!</em>
                </div>
            </nav>
            <div className="d-flex vh-100 bg-info justify-content-center align-item-center">
                <div className="card my-auto " >
                    <Link to='/create' className="btn btn-primary w-20 ms-auto m-1">Add Kural + </Link>
                    <div className="card-body">
                        {
                            thirukkurals.map((thirukkural) => {
                                return <>
                                    <p className="card-title"><b>Kural En : </b>{thirukkural.KuralEn}</p>
                                    <p className="card-subtitle mb-2"><b>Kural : </b>{thirukkural.Kural}</p>
                                    <p className="card-text"><b>Kural Vilakkam : </b>{thirukkural.KuralVilakkam}</p>
                                    <Link to={`/update/${thirukkural._id}`} className="btn btn-primary m-1">Update Kural</Link>
                                    <button className="btn btn-danger m-1" onClick={(e) => handleDelete(thirukkural._id)}>Delete</button>
                                </>
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Thirukkural;