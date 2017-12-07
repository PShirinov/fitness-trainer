import React from 'react'
import Text from '../Text/Text.js'
import Image from '../Image/Image.js'
import Button from '../Button/Button.js'
import './SalesItem.scss'

const SalesItem = props =>
  <div className='sales-item'>
    <div className='sales-item-info'>
      <h1 className='sales-item-title'>{props.title}</h1>
      <Text textClass='sales-item-desc' content={props.content} />
      <p className='sales-item-time'>Конец акции {props.expireDate}</p>
      <Button classBtn='btn sales-item-btn' text='Подробнее' />
    </div>

    <Image imageClass='sales-item-img' path={props.img} />
  </div>

export default SalesItem
