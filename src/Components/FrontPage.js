import { useState } from "react"
import TagLines from "./TagLines"
import "./FrontPage.css"
import { useNavigate } from "react-router-dom"

function FrontPage( {setUserEmail} ) {
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
                What's your name?
                <input className="frontpage__input" type="text" name="name" id="name" value={name} onChange={handleNameChange} />
            </label>
            <label className="frontpage__label">
                Enter your email address
                <input className="frontpage__input" type="email" name="email" id="email" value={email} onChange={handleEmailChange} />
            </label>
            <label className="frontpage__label">
                Ready to find your perfect mismatch!
                <input className="frontpage__cta" type="submit" value="Let's Go!"/>
            </label>
        </form>
    </main>
  )
}

export default FrontPage