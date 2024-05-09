import { IconRepeat } from '@tabler/icons-react';

interface GameProps {
    score: number;
    errors: number;
    precision: number;
    window: string;
    setWindow: React.Dispatch<string>;
}

function Results({ score, errors, precision, window, setWindow }: GameProps) {
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
                <p>Score : {score} </p>
                <p>Precision: {precision} </p>
                <p>Errors: {errors} </p>

                <button
                    onClick={() => setWindow('Game')}
                    className="text-center bg-white rounded-full p-2 "
                >
                    <IconRepeat color="blue" size={40} />
                </button>
            </article>
        </section>
    );
}
export default Results;
