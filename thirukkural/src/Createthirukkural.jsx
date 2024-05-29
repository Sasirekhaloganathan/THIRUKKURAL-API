import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateThirukkural = () => {
    const [KuralEn, setKuralEn] = useState()
    const [Kural, setKural] = useState()
    const [KuralVilakkam, setKuralVilakkam] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("https://thirukkural-api-dycp.onrender.com/createthirukkural", { KuralEn, Kural, KuralVilakkam })
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
                    <h1>Add Kural</h1>
                    <form onSubmit={Submit}>
                        <div className="form-group">
                            <label><b>Kural En</b></label>
                            <input type="text" className="form-control" placeholder="Enter Kural En"
                                onChange={(e) => setKuralEn(e.target.value)} />

                        </div>
                        <div className="form-group">
                            <label><b>Kural</b></label>
                            <input type="text" className="form-control" placeholder="Enter Kural"
                                onChange={(e) => setKural(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label><b>Kural Vilakkam</b></label>
                            <input type="text" className="form-control" placeholder="Enter Kural Vilakkam"
                                onChange={(e) => setKuralVilakkam(e.target.value)} />

                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default CreateThirukkural;