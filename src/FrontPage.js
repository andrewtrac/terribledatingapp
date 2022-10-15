import { useState } from "react"

function FrontPage() {
    const [email, setEmail] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

  return (
    <main>
        <div>
            <h1>World's Worst Dating App</h1>
            <h2>Welcome</h2>
        </div>
        <form>
            <label>
                Enter your email address
                <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Ready to find your perfect mismatch
                <input type="submit" value="Enter (if you dare)"/>
            </label>
        </form>
    </main>
  )
}

export default FrontPage