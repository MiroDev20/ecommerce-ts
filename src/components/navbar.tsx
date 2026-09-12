import { useState } from 'react'
import { IconClose } from './icons/icon-close.tsx'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <div className={`
                    ${isOpen ? 'bg-black/30' : 'bg-black/0'}
                    w-full
                    p-4
                    top-0
                    h-screen
                    absolute
                `}
            >
            </div>

        <div className='p-4'>
            {
                isOpen ? (
                        <nav className="
                                box-border
                                absolute
                                flex
                                flex-col
                                p-4
                                gap-8
                                w-50
                                h-screen
                                bg-white
                            "
                        >
                            <IconClose onClick={() => {setIsOpen(false)}}/>
                            <ul className="
                                    flex
                                    flex-col
                                    gap-4
                                    font-bold
                                    text-lg
                                    text-very-dark-blue
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
                    ) : (
                        <img
                            className="
                                w-3
                                cursor-pointer
                                absolute
                            "
                            onClick={() => setIsOpen(true)}
                            src="./src/assets/icons/icon-menu.svg"
                            alt="menu icon"
                        />
                    )
                }
        </div>
        </>
    )
}
