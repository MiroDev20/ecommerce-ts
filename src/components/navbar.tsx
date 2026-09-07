export const Navbar = () => {
    return (
        <div className="
                absolute
                w-full
                h-screen
                bg-black/30
                
            "
        >
            <nav className="
                    flex
                    flex-col
                    p-4
                    gap-8
                    w-50
                    h-screen
                    bg-white
                "
            >
                <img className="
                        w-3
                    "
                    src="./src/assets/icons/icon-close.svg"
                    alt="close navbar"
                />
                <ul className="
                        flex
                        flex-col
                        gap-4
                        font-bold
                    "
                >
                    <li>
                        <a href="#">Collections</a>
                    </li>
                    <li>
                        <a href="#">Men</a>
                    </li>
                    <li>
                        <a href="#">Women</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
