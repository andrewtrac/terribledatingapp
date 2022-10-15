import { useState } from "react"
import TagLines from "./TagLines"
import "./FrontPage.css"
import { useNavigate } from "react-router-dom"

function FrontPage( {setUserEmail, setUserName} ) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleEmailSubmit = (event) => {
        setUserEmail(event.target.email.value)
        setUserName(event.target.name.value)
        navigate("/registration");
    }

  return (
    <main className="frontpage">
        <div className="frontpage__header">
            <h1 className="frontpage__title">Cringe</h1>
            <TagLines />
        </div>
        <form className="frontpage__form" onSubmit={handleEmailSubmit}>
            <label className="frontpage__label">
                <input className="frontpage__input" type="text" name="name" id="name" value={name} onChange={handleNameChange} placeholder="Enter your name"/>
            </label>
            <label className="frontpage__label">
                <input className="frontpage__input" type="email" name="email" id="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
            </label>
            <label className="frontpage__shoutout">
                Ready to find your perfect mismatch?
                <input className="frontpage__cta" type="submit" value="ENTER (I dare you!)"/>
            </label>
        </form>
    </main>
  )
}

export default FrontPage