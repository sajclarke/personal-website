import { useEffect, useState } from 'react'

const RotatingHeading = ({ words }) => {

    const [wordIndex, setWordIndex] = useState(0)
    // const words = ['small businesses', 'churches', 'doctors', 'lawyers', 'Governments', 'your next big idea']

    useEffect(() => {
        let tempIndex = 0
        const interval = window.setInterval(() => {
            // console.log(Index)

            if (tempIndex >= 5) {
                // console.log('reset')
                tempIndex = 0
                setWordIndex(tempIndex)
                // return
            } else {
                tempIndex = tempIndex + 1
                setWordIndex(tempIndex);
            }
            // console.log(tempIndex)

        }, 750);
        return () => window.clearInterval(interval);
    }, [wordIndex]);

    return (
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 my-4">Hi, I build software for {words[wordIndex]}</h1>
    )

}

export default RotatingHeading