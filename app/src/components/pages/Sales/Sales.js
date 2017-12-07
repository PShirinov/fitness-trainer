import React from 'react'
import SalesItem from '../../SalesItem/SalesItem.js'
import './Sales.scss'

const Sales = props => {
  const salesData = {
    sale1: {
      title: 'До 3 месяцев безлимитного посещения групповых занятий от фитнес-клуба «Reflex»',
      description: 'С сертификатом вы получаете 1, 2 или 3 месяца безлимитного посещения групповых занятий в фитнес-клубе «Reflex» со скидкой до 56%. Предложение актуально только для новых клиентов.',
      expireDate: '12.01.2018',
      img: 'http://www.free-style.by/assets/img/akcii/gym/gym_a_r-min.png'
    },

    sale2: {
      title: 'Скидка 15% на все спортивные аксессуары',
      description: 'Безлимитные абонементы по любым направлениям в фитнес-зале EveryDay на Контрактовой и Лукьяновке. Скидка до 78%',
      expireDate: '01.03.2018',
      img: 'http://kupikupon.com.ua/system/deals/logos/125465/deal_615x301/8738738333_01.jpg?1507551450'
    },

    sale3: {
      title: 'До 3 месяцев безлимитного посещения фитнеса в фитнес-клубе «Сокол»',
      description: 'С сертификатом вы получаете 1, 2 или 3 месяца безлимитного посещения фитнеса в фитнес-клубе «Сокол» со скидкой до 56%. Предложение актуально для новых клиентов клуба.',
      expireDate: '01.02.2018',
      img: 'https://cdn5.superdeal.ua/uploaded/new_campaign_pictures/438419/data/main720x340/bez_imeni-4.jpg?1511857603'
    }
  }

  return (
    <section className='sales'>
      <h1 className='sales-title'>Акции и скидки</h1>
      <SalesItem
          title={salesData.sale1.title}
          content={salesData.sale1.description}
          expireDate={salesData.sale1.expireDate}
          img={salesData.sale1.img} />

      <SalesItem
          title={salesData.sale1.title}
          content={salesData.sale1.description}
          expireDate={salesData.sale1.expireDate}
          img={salesData.sale2.img} />

      <SalesItem
          title={salesData.sale1.title}
          content={salesData.sale1.description}
          expireDate={salesData.sale1.expireDate}
          img={salesData.sale3.img} />
    </section>
  )
}
export default Sales
