import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
        });   
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="Enter Your Full Name " type="text" value={formData.fullName} onChange={handleInputChange} name="fullName" id="fullName"/>
            <br /><br />
            <br /><br />
            <label htmlFor="username">Username</label>
            <input placeholder="Enter username" type="text" value={formData.username} onChange={handleInputChange} name="username" id="username"/>
            <br /><br />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    );
}