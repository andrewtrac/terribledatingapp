import React, { useEffect, useState } from 'react'

function TagLines() {
    const tagLines = [
        "Your last chance at happiness!",
        "You’ve tried all the others, why not ours?",
        "What have you got to lose?",
        "They say opposites attract… how about mortal enemies?",
        "Beggars can’t be choosers!",
        "Don’t be picky!",
        "It’s not them, it’s you!",
        "Meet your new antagonist!",
        "Take it or leave it!",
        "Do you want to die alone?",
        "Your mother wants grandchildren!"
    ]
    const [currentTagline, setCurrentTagline] = useState(tagLines[0])
    const [intervalRunning, setIntervalRunning] = useState(false)

    useEffect (()=>{
        if (!intervalRunning) {
            setInterval(() => {
                const totalTaglines = tagLines.length - 1;
                const chosenTaglineIndex = Math.floor(Math.random() * totalTaglines)
                setCurrentTagline(tagLines[chosenTaglineIndex])
            }, 10000)
            setIntervalRunning(true)
        }
    },[])

   

  return (
    <h2 className='frontpage__subtitle waitingpage__subtitle'>{currentTagline}</h2>
  )
}

export default TagLines