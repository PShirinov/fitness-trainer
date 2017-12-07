import React, {Component} from 'react'
import './Button.scss'

const Button = props =>
  <button className={props.classBtn}>{props.text}</button>

export default Button;
