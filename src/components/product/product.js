import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual
} from 'swiper/core';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

import Star from '../star'

import mainImg from './../../assets/images/img.png'
import './product.scss'
import Purchase from '../purchase/purchase';

const createArray = length => [...Array(length)]
const Product = () => {
    SwiperCore.use([Navigation, Pagination, Autoplay, Virtual
    ]);

    const [rating, setRating] = useState(3.5)

    return (
        <div className='product'>
            <div className='container'>
                <h1>ПК 63-12-8</h1>
                <div className='product__rating'>
                    {
                        createArray(5).map((n, i) => {
                            let fraction = rating % 1
                            let num = rating - fraction
                            let half = fraction !== 0 && num === i && fraction > 0.3 && fraction < 1 //Половина будет если дробь больше 0.3 и меньше 1

                            return (
                                <Star
                                    index={i + 1}
                                    setRating={setRating}
                                    key={i}
                                    selected={num > i}
                                    halfSelected={half} />
                            )
                        }
                        )
                    }
                </div>
            </div>


            <div style={{ 'background': 'rgb(231, 231, 231)' }}>
                <div className='container'>
                    <Swiper
                        className='product__category'
                        spaceBetween={5}
                        slidesPerView={3}
                        centeredSlides={false}
                        centerInsufficientSlides={true}
                    >
                        <SwiperSlide>
                            <h4>
                                ВСЕ О ТОВАРЕ
                            </h4>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4>
                                ХАРАКТЕРИСТИКИ
                            </h4>
                        </SwiperSlide>
                        <SwiperSlide >
                            <h4>
                                ОБЗОР
                            </h4>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4>
                                ВСЕ О ТОВАРЕ
                            </h4>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4>
                                ХАРАКТЕРИСТИКИ
                            </h4>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4>
                                ОБЗОР
                            </h4>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className='container'>
                <Swiper
                    className='product__mainImg'
                    slidesPerView={1}
                    pagination
                >
                    <SwiperSlide>
                        <img src={mainImg} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mainImg} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mainImg} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mainImg} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mainImg} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mainImg} alt='' />
                    </SwiperSlide>
                </Swiper>

                <div className="product__characteristic">
                    <h2>
                        ХАРАКТЕРИСТИКИ
                    </h2>

                    <div className="product__characteristic-title">
                        <h4>
                            <span>
                                Наименование: </span>Плиты пк
                        </h4>
                        <h4>
                            <span>
                                Завод-производитель: </span>Москва и МО
                        </h4>
                        <h4>
                            <span>
                                Технические условия: </span>ГОСТ 9561-91
                        </h4>
                        <h4>
                            <span>
                                Длина, мм: </span>6300
                        </h4>
                        <h4>
                            <span>
                                Ширина, мм: </span>1200
                        </h4>
                        <h4>
                            <span>
                                Высота, мм: </span>220
                        </h4>
                        <h4>
                            <span>
                                Расчетная нагрузка, кг/м<sup>2</sup>: </span>800
                        </h4>

                        <h4>
                            <span>
                                Вес 1шт., т: </span>1,755
                        </h4>
                    </div>
                </div>

                <Purchase />
            </div>
        </div>
    )
}

export default Product