import { IconArrowLeft, IconArrowRight, IconX } from '@tabler/icons-react';
import { OptionsProps } from '../interfaces/menu.interface';

function Options({ window, setWindow, setTime, time }: OptionsProps) {
    if (time === 0 || time < 0) {
        setTime(0);
    }

    const timeToMinutes = time.toString().slice(0, 2);

    return (
        <article
            className={`grid place-items-center  transition-opacity duration-150   ${
                window === 'Options'
                    ? 'min-h-screen opacity-100 p-4'
                    : ' opacity-0 h-0 overflow-hidden'
            } `}
        >
            <section className="relative bg-black text-white p-4  rounded-xl grid gap-4  w-[min(100%,_400px)]">
                <h2 className="px-2 text-3xl uppercase font-bold mb-4 bg-white text-black rounded-xl w-min mx-auto">
                    Configurations
                </h2>

                <button
                    className=" absolute right-0 p-4"
                    onClick={() => setWindow('Menu')}
                >
                    <IconX size={20} />
                </button>
                <div className="flex justify-between">
                    <h4>Time:</h4>

                    <div className="flex place-items-center">
                        <button
                            onClick={() => setTime(time - 10000)}
                            className={`${time ? 'visible' : 'hidden'}`}
                        >
                            <IconArrowLeft
                                size={20}
                                color="red"
                                className="transition-all animate-pulse"
                            />
                        </button>
                        <p>{timeToMinutes} seg</p>
                        <button
                            onClick={() => setTime(time + 10000)}
                            className={`${
                                time !== 90000 ? 'visible' : 'hidden'
                            }`}
                        >
                            <IconArrowRight
                                size={20}
                                color="red"
                                className="transition-all animate-pulse"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h4>Vidas:</h4>
                    <p>Vidas standar</p>
                </div>
            </section>
        </article>
    );
}

export default Options;
