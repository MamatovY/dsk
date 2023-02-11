import './header.scss'
import headLogo from './../../assets/images/DSK_logo.svg'
import Search from '../search'
import { MdMenuOpen, MdOutlineClose } from "react-icons/md";
import { useState } from 'react';

const Header = () => {
    const [menu, setMenu] = useState(false)
    const [path, setPath] = useState('path6')
    const pathData = [
        { path: 'path1', title: 'Главная' },
        { path: 'path2', title: 'Каталог товаров' },
        { path: 'path3', title: 'Частное домостроение' },
        { path: 'path4', title: 'Плиты перекрытия' },
        { path: 'path5', title: 'Плиты Пк' },
        { path: 'path6', title: 'ПК 63-12-8' },
    ]

    const pathIndex = pathData.findIndex(i => i.path === path)

    const pathList = pathData.map((item, i) => {
        const activeClass = pathIndex === i ? 'active' : ''
        if (pathIndex >= i) {
            return (
                <li key={i} className={activeClass} onClick={() => setPath(item.path)}>
                    {item.title}
                </li>
            )
        } else {
            return null
        }
    })

    return (
        <div className="container">
            <div className="header">
                <div className="header__top">
                    <div className="header__top-logo">
                        <img src={headLogo} alt="" />
                    </div>

                    <Search />

                    <div className="header__top-menu" onClick={() => setMenu(!menu)}>
                        {
                            menu ? <MdOutlineClose /> :
                                <MdMenuOpen />
                        }
                    </div>
                </div>

                <div className="header__pathTitle">
                    <ul>
                        {pathList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header