import { useEffect, useState } from 'react'

const RotatingHeading = ({ words }) => {

    const [wordIndex, setWordIndex] = useState(0)
    // const words = ['small businesses', 'churches', 'doctors', 'lawyers', 'Governments', 'your next big idea']

    useEffect(() => {
        console.log('start intervals')
        let tempIndex = 0
        const interval = window.setInterval(() => {
            console.log(tempIndex)

            if (tempIndex > 4) {
                console.log('reset')
                tempIndex = 0
                setWordIndex(tempIndex)
                // return
            } else {
                tempIndex = tempIndex + 1
                setWordIndex(tempIndex);
            }
            console.log(tempIndex)

        }, 750);
        return () => window.clearInterval(interval);
    }, []);

    return (
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 my-4">
            Hi, I build software for <span className="text-yellow-600">{words[wordIndex]}</span>
        </h1>
    )

}

export default RotatingHeading