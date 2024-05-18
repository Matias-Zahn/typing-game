import { ChangeEvent, useEffect, useState } from 'react';
import { MenuProps } from '../interfaces/menu.interface';
import Results from './Results';

const wordsList = ['hola', 'como', 'estas', 'pepe', 'colorado', 'marron'];

function Game({ window, setWindow }: MenuProps): JSX.Element {
    const [word, setWord] = useState('');
    const [precision, setPrecision] = useState(100);
    const [errors, setErrors] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(true);
    const [input, setInput] = useState(false);

    const randomWord = (): string => {
        const numberOfElements = Math.ceil(Math.random() * wordsList.length);

        return wordsList[numberOfElements - 1];
    };

    const handleWord = (event: ChangeEvent<HTMLInputElement>): void => {
        const wordInput = event.target.value.toLowerCase();

        const longitud = Math.min(wordInput.length, word.length);

        let totalWords = 0;

        for (let i = 0; i < longitud; i++) {
            totalWords++;

            if (wordInput[i] !== word[i]) {
                setErrors(errors + 1);
                setScore(score - 10);
            }

            if (wordInput[i] === word[i]) {
                setScore(score + 10);
            }
        }

        const porcentaje = Math.floor(
            ((totalWords - errors) / totalWords) * 100
        );

        //CONTROLAR LA PRECISION Y QUE NO BAJE DE 0
        if (porcentaje < 0 || score < 0) {
            setPrecision(0);
            setScore(0);
        } else {
            setPrecision(porcentaje);
        }

        if (wordInput.length && wordInput === word) {
            (event.target as HTMLInputElement).value = '';
            setWord(randomWord);
        }

        if (window === 'Results') {
            event.target.value = '';
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
        }
    }, [window, setTimer, setInput]);

    useEffect(() => {
        if (!timer) {
            setWindow('Results');
        }
    }, [timer, setWindow, setInput]);

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
                        <div>
                            <p>precision:</p>
                            <p>{precision}</p>
                        </div>
                    </div>

                    <div>
                        <p>VIDAS</p>
                    </div>
                </article>

                <div className="grid place-content-center text-center gap-5">
                    <h1 className="text-2xl uppercase tracking-widest font-bold bg-black text-white rounded-lg py-2">
                        {word}
                    </h1>
                    <input
                        disabled={input}
                        onChange={handleWord}
                        className="outline-none p-2  rounded-xl"
                        type="text"
                        autoFocus={!input}
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
                setScore={setScore}
                setErrors={setErrors}
                setPrecision={setPrecision}
                setInput={setInput}
                setTimer={setTimer}
            />
        </>
    );
}
export default Game;
