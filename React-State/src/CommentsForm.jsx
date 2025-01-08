import { useState } from "react"

export default function CommentsForm () {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        })
    }

    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username"> Username </label>
                <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
                <br /><br /><br />

                <label htmlFor="remarks"> Remarks </label>
                <textarea placeholder="add few remarks" onChange={handleInputChange} id="remarks" value={formData.remarks} name="remarks">Remarks</textarea>
                <br /><br /><br />

                <label htmlFor="rating"> Ratings </label>
                <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
                <br /><br /><br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}