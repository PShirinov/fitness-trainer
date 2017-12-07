import React, {Component} from 'react'
import Button from './../Button/Button';
import './MotiovationSection.scss'

const MotivationSection = props =>
  <section className='motivation-section'>
    <h3>Стань лучше прямо сейчас!</h3>
    <Button text='Начать тренироваться' classBtn='btn service-button' />
  </section>

export default MotivationSection
