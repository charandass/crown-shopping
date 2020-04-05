import React from 'react';

import './form-input.style.scss';


const FormInput = ({handgleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handgleChange} {...otherProps}/>
        {
            label ?
            (
                <label className={`${otherProps.value.length ? 'shrink': ''}form-input-label`}>
                {label}
                </label>
            )
            : null
        
        }
    </div>
);


export default FormInput;