import { useState } from "react"
import TagLines from "./TagLines"

function FrontPage( {setUserEmail} ) {
    const [email, setEmail] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleEmailSubmit = (event) => {
        setUserEmail(event.target.email.value)
    }

  return (
    <main>
        <div>
            <h1>World's Worst Dating App</h1>
            <h2>Welcome</h2>
            <TagLines />
        </div>
        <form onSubmit={handleEmailSubmit}>
            <label>
                Enter your email address
                <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Ready to find your perfect mismatch!
                <input type="submit" value="Let's Go!"/>
            </label>
        </form>
    </main>
  )
}

export default FrontPage