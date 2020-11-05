import React, {useState} from 'react';


const BoxForm = props => {

    const {handleAddBox} = props;

    const [color, setColor] = useState('');


    return (
            <form className="col-5 mx-auto my-5" onSubmit = {(e) => handleAddBox(e, color)} >

                <div className="form-group">
                    <label>Color: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>

                <input type="submit" value="Add Box" className="btn btn-light" />
            </form>

    );
}

export default BoxForm