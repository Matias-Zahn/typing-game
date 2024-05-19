import { FormEvent, useState } from 'react';
import Menu from './components/Menu';
import Game from './components/Game';
import Options from './components/Options';

function App(): JSX.Element {
    const [userName, setUserName] = useState('User');

    const [window, setWindow] = useState<string>('');

    const [time, setTime] = useState(30000);

    const handleUserName = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const targetName: string = event.currentTarget.userName.value;

        setUserName(targetName);

        if (userName.length > 0) {
            setWindow('Menu');
        }
    };

    return (
        <main className="bg-red-200 min-h-screen ">
            <section
                className={`grid place-items-center  transition-opacity duration-150   ${
                    window === ''
                        ? 'min-h-screen opacity-100 p-4'
                        : ' opacity-0 h-0 overflow-hidden'
                } `}
            >
                <article className=" grid gap-4 border-4 p-4 border-black shadow-xl shadow-black">
                    <h1 className="text-zinc-950 font-bold text-4xl text-center">
                        Welcome to Keyboard Types
                    </h1>

                    <h3 className="font-semibold text-center text-gray-800 text-xl">
                        To start, enter your name
                    </h3>

                    <p
                        className={` text-red-700 transition-opacity ${
                            userName.length === 0 ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        *To continue you must be enter a name
                    </p>

                    <form
                        onSubmit={handleUserName}
                        className="flex rounded-xl border border-black overflow-hidden"
                    >
                        <input
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            autoComplete="off"
                            name="userName"
                            className="w-[70%] p-2 "
                            type="text"
                        />
                        <button className="w-[30%] px-2 border-l border-black bg-red-400">
                            Enter
                        </button>
                    </form>
                </article>
            </section>

            <Menu window={window} setWindow={setWindow} />
            <Game
                window={window}
                setWindow={setWindow}
                time={time}
                setTime={setTime}
            />
            <Options
                window={window}
                setWindow={setWindow}
                time={time}
                setTime={setTime}
            />
        </main>
    );
}

export default App;
