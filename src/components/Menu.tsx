interface MenuProps {
    window: string;
    setWindow: React.Dispatch<string>;
}

function Menu({ window, setWindow }: MenuProps): JSX.Element {
    return (
        <section
            className={` grid place-items-center ${
                window === 'Menu' ? 'min-h-screen p-4' : 'h-0 overflow-hidden'
            }  `}
        >
            <article className="grid w-[min(100%,_400px)] gap-4 border-4 p-4 border-black bg-black rounded-xl text-white">
                <h1 className="text-3xl text-center font-bold uppercase">
                    Keyboard Typing
                </h1>

                <div className="grid gap-4 place-items-center  [&>button]:w-[70%] [&>button]:rounded-md [&>button]:p-4  [&>button]:bg-red-400">
                    <button
                        onClick={() => setWindow('Game')}
                        className="font-semibold uppercase tracking-widest hover:bg-orange-500 transition-colors"
                    >
                        Start
                    </button>
                    <button
                        onClick={() => setWindow('Options')}
                        className="font-semibold uppercase tracking-widest hover:bg-orange-500 transition-colors"
                    >
                        Options
                    </button>
                    <button className="font-semibold uppercase tracking-widest hover:bg-orange-500 transition-colors">
                        Credits
                    </button>
                </div>
            </article>
        </section>
    );
}
export default Menu;
