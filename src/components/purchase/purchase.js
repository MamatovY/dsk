import './purchase.scss'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { HiPlus, HiMinus } from 'react-icons/hi'
import { MdPhoneInTalk, MdOutlineFavoriteBorder } from 'react-icons/md'
import whatsApp from './../../assets/images/WhatsApp.png'
import viber from './../../assets/images/Viber.png'
import telegramm from './../../assets/images/Telegram.png'
import { useState } from 'react'


const Purchase = () => {
    const [count, setCount] = useState(10)

    return (
        <div className="purchase">
            <h2>
                484,00 &#8381;/шт.
            </h2>
            <div>
                <span>154,88 &#8381;/м<sup>2</sup></span>
            </div>
            <div className="purchase__article">
                <span>Артикул: </span>0543600
            </div>

            <div className="purchase__buttons">
                <div className="purchase__buttons-counter button btn">
                    <div className="minus" onClick={() => setCount(count - 1)}><HiMinus /></div>
                    {count} шт.
                    <div className="plus" onClick={() => setCount(count + 1)}><HiPlus /></div>
                </div>
                <div className="purchase__buttons-basket button">
                    <div>
                        <MdOutlineShoppingCart />
                    </div>
                    <div>
                        В корзину
                    </div>
                </div>
                <div className="purchase__buttons-favorite button">
                    <div>
                        <span>
                            <MdOutlineFavoriteBorder />
                        </span>
                    </div>
                    <div>
                        <span>
                            В избранное
                        </span>
                    </div>
                </div>
                <div className="purchase__buttons-call button">
                    <div>
                        <MdPhoneInTalk />
                    </div>
                    <div>
                        Позвонить
                    </div>
                </div>
            </div>

            <div className="purchase__messengers">
                <div>
                    <span>
                        Также для вашего удобства мы доступны в мессенджерах
                    </span>
                </div>
                <div className="purchase__messengers-app">
                    <a href="/">
                        <img src={whatsApp} alt="" />
                    </a>
                    <a href="/">
                        <img src={viber} alt="" />
                    </a>
                    <a href="/">
                        <img src={telegramm} alt="" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Purchase