import { useState } from 'react'

interface IFilter {
    setGithubUser: any;
}
const Filter: React.FC<IFilter> = ({ setGithubUser }) => {
    const [inputValues, setInputValues] = useState();

    const handleOnChange = (e: any) => {
        setInputValues(e.target.value);
    };

    const params = JSON.stringify(inputValues)
    
    const handleSubmit = () => {
        setGithubUser(params)
    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="mb-3">
                    <input
                        name="komoditas"
                        type="text"
                        className="form-control"
                        placeholder="Enter Username"
                        defaultValue={inputValues}
                        onChange={handleOnChange} />
                </div>
            </div>
            <div className="col-12">
                <div className="d-grid">
                <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Search</button>
                </div>
            </div>
        </div>

    )
}

export default Filter

