import React, { useState } from 'react'

const Form = props => {

    const [formData, setFormData] = useState({ zipCode: "" })

    const handleChange = event => {
        const { name, value } = event.target
        setFormData({
            [name]: value
        })
    }

    const handleSubmit = event => {
        console.log(formData.zipCode)
        props.fetchWeather(formData.zipCode)
    }

    return (
        <div id="search">
            <input 
                type="text"
                name="zipCode"
                placeholder="Enter a zip code" 
                value={formData.zipCode}
                onChange={handleChange}
            />
            <div onClick={handleSubmit}>Submit</div>
        </div>
    )
}

export default Form