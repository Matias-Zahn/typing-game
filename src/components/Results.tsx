import { IconRepeat, IconX } from '@tabler/icons-react';
import React from 'react';

interface GameProps {
    score: number;
    errors: number;
    precision: number;
    window: string;
    setWindow: React.Dispatch<string>;
    setScore: React.Dispatch<number>;
    setErrors: React.Dispatch<number>;
    setPrecision: React.Dispatch<number>;
    setInput: React.Dispatch<boolean>;
    setTimer: React.Dispatch<boolean>;
}

function Results({
    score,
    errors,
    precision,
    window,
    setWindow,
    setErrors,
    setPrecision,
    setScore,
    setInput,
    setTimer,
}: GameProps) {
    const handleButtom = (window: string): void => {
        setErrors(0);
        setPrecision(0);
        setScore(0);
        setWindow(window);
        setInput(false);
        setTimer(true);
    };

    return (
        <section
            className={`${
                window === 'Results'
                    ? 'min-h-screen fixed top-0 right-0 left-0 bottom-0 bg-black/30'
                    : 'h-0 overflow-hidden opacity-0'
            }  `}
        >
            <article
                className={` ${
                    window === 'Results'
                        ? 'absolute top-2/4 right-2/4 -translate-y-2/4 translate-x-2/4 grid w-[min(100%,_400px)] gap-4 border-4 p-4'
                        : 'h-0 overflow-hidden opacity-0'
                }  border-black bg-black rounded-xl text-white`}
            >
                <h1 className=" text-center font-bold text-2xl uppercase">
                    Congratulations
                </h1>
                <button
                    onClick={() => handleButtom('Menu')}
                    className="absolute right-2 top-2 p-1 bg-white rounded-full"
                >
                    <IconX color="black" size={18} />
                </button>
                <p>Score : {score} </p>
                <p>Precision: {precision}% </p>
                <p>Errors: {errors} </p>

                <button
                    onClick={() => handleButtom('Game')}
                    className="bg-white rounded-full p-2 grid place-content-center"
                >
                    <IconRepeat color="blue" size={40} />
                </button>
            </article>
        </section>
    );
}
export default Results;
