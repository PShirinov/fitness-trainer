import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import Text from './../Text/Text';
import Image from './../Image/Image';
import './ReviewSection.scss'


const Review = props => {
  const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      }
  }

  const reviewsData = [
    {
      name: 'Андрей Завгородний',
      text: 'Клуб очень нравится, хожу с удовольствием. Очень нравятся тренировки с замечательным тренером Кущенко Владом. Строгий, но справедливый, знающий профи!',
      photo: 'https://vk.vkfaces.com/1927/u14581311/d_bf5d732f.jpg'
    },

    {
      name: 'Наталья Еремина',
      text: 'Я люблю этот клуб за комфорт и результат. Спорт изменил мой характер, тело, отношение к людям. И роль Кирилла в этом стала ключевой.',
      photo: 'https://ru-static.z-dn.net/files/da8/ab9a9ff7938f98b56cf7f584887059c7.jpg'
    },

    {
      name: 'Вадим Макеев',
      text: 'Дуже подобається цей клуб. Просторий, затишний і позитивний. Інструктори уважні. Асортимент тренажерів хороший. Ще б був би басейн - то була б казка!',
      photo: 'https://s.dou.ua/img/avatars/100x100_135746.jpg'
    },

    {
      name: 'Кирилл Чернов',
      text: 'Дуже подобається цей клуб. Просторий, затишний і позитивний. Інструктори уважні. Асортимент тренажерів хороший. Ще б був би басейн - то була б казка!',
      photo: 'https://vk.vkfaces.com/10015/u115741248/d_c4a84670.jpg'
    },

    {
      name: 'Анна Маценко',
      text: 'Дуже подобається цей клуб. Просторий, затишний і позитивний. Інструктори уважні. Асортимент тренажерів хороший. Ще б був би басейн - то була б казка!',
      photo: 'https://zfilm-hd.org/uploads/fotos/foto_26930.jpg'
    },
  ]

  // const reviews =
  // console.log(reviews)

  return (
    <Swiper {...params} className='swiper-wrapper'>
      {reviewsData.map((review, i) => {
        return (
          <div key={i} className='review-slide'>
            <div className='slide-content'>
              <span className='review-name'>{review.name}</span>
              <Text textClass='review-text' content={review.text} />
            </div>
            <Image imageClass='review-avatar' path={review.photo} />
          </div>
        )
      })}
    </Swiper>
  )
}

export default Review
