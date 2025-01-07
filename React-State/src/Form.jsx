import { useState } from "react";

export default function Form() {
    let [fullName, setFullName] = useState("Adya");

    let handleNameChange = (event) => {
        setFullName(event.target.value);
    };

    return (
        <form>
            <input placeholder="Enter Your Name " type="text" value={fullName} onChange={handleNameChange} />
            <button type="submit">Submit</button>
        </form>
    );
}