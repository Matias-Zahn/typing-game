import { ChangeEvent, useEffect, useState } from 'react';
import { MenuProps } from '../interfaces/menu.interface';
import Results from './Results';

const wordsList = ['HOLA', 'COMO', 'ESTAS', 'PEPE', 'COLORADO', 'MARRON'];

function Game({ window, setWindow }: MenuProps): JSX.Element {
    const [word, setWord] = useState('');
    const [precision, setPrecision] = useState(100);
    const [errors, setErrors] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(true);

    const randomWord = (): string => {
        const numberOfElements = Math.ceil(Math.random() * wordsList.length);

        return wordsList[numberOfElements - 1];
    };

    const handleWord = (event: ChangeEvent): void => {
        const wordInput = (event.target as HTMLInputElement).value;

        const longitud = Math.min(wordInput.length, word.length);

        let correctWords = 0;

        for (let i = 0; i < longitud; i++) {
            if (wordInput[i] !== word[i]) {
                setErrors(errors + 1);
                setScore(score - 10);
            }

            if (wordInput[i] === word[i]) {
                setScore(score + 10);
                correctWords++;
            }
        }

        const porcentaje = ((correctWords - errors) / correctWords) * 100;

        setPrecision(porcentaje);

        if (wordInput.length && wordInput === word) {
            (event.target as HTMLInputElement).value = '';
            setWord(randomWord);
        }
    };

    useEffect(() => {
        setWord(randomWord);
    }, []);

    useEffect(() => {
        if (window === 'Game') {
            setTimeout(() => {
                setTimer(false);
            }, 10000);

            // SOLO LLEGA ACA SI WINDOW ES GAME
            if (!timer) setTimer(true);
        }
    }, [window, setTimer, timer]);

    useEffect(() => {
        if (!timer) setWindow('Results');
    }, [timer, setWindow]);

    return (
        <>
            <section
                className={` ${
                    window !== 'Game'
                        ? 'h-0 overflow-hidden'
                        : 'min-h-screen p-4 grid grid-rows-[auto_1fr]'
                }`}
            >
                <article className="flex justify-between">
                    <div className="flex gap-2">
                        <div>
                            <p>Errores:</p>
                            <p>{errors}</p>
                        </div>
                        <div>
                            <p>Score:</p>
                            <p>{score}</p>
                        </div>
                    </div>

                    <div>
                        <p>VIDAS</p>
                    </div>
                </article>

                <div className="grid place-content-center text-center gap-5">
                    <h1>{word}</h1>
                    <input
                        onChange={handleWord}
                        className="outline-none"
                        type="text"
                        autoFocus
                        autoComplete="off"
                    />
                </div>
            </section>
            <Results
                window={window}
                setWindow={setWindow}
                errors={errors}
                precision={precision}
                score={score}
            />
        </>
    );
}
export default Game;
