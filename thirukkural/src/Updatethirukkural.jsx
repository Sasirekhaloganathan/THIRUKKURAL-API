import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateThirukkural = () => {
    const { id } = useParams();
    const [KuralEn, setKuralEn] = useState()
    const [Kural, setKural] = useState()
    const [KuralVilakkam, setKuralVilakkam] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://thirukkural-api-dycp.onrender.com/getThirukkural/'+id)
        .then(results => {
            console.log(results)
            setKuralEn(results.data.KuralEn)
            setKural(results.data.Kural)
            setKuralVilakkam(results.data.KuralVilakkam) })
        .catch(err => console.log(err))
    },[])

    const Update = (e) => {
        e.preventDefault();
        axios.put("https://thirukkural-api-dycp.onrender.com/updatethirukkural/"+id, { KuralEn, Kural, KuralVilakkam })
        .then(result => {
            console.log(result);
            navigate('/')
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <div className="d-flex vh-100 bg-success justify-content-center align-item-center">
                <div className="my-auto  w-50 h-30 bg-white rounded p-3">
                    <h1>Update Kural</h1>
                    <form onSubmit={Update}>
                        <div className="form-group">
                            <label><b>Kural En</b></label>
                            <input type="text" className="form-control" placeholder="Enter Kural En"
                            value={ KuralEn } onChange={(e) => setKuralEn(e.target.value)} />

                        </div>
                        <div className="form-group">
                            <label><b>Kural</b></label>
                            <input type="text" className="form-control" placeholder="Enter Kural"
                            value={ Kural} onChange={(e) => setKural(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label><b>Kural Vilakkam</b></label>
                            <input type="text" className="form-control" placeholder="Enter Kural Vilakkam" 
                            value={ KuralVilakkam } onChange={(e) => setKuralVilakkam(e.target.value)} />

                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Update</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdateThirukkural;