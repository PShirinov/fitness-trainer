import React, { Component } from 'react';
import './ContactsField.scss'


const ContactsField = props =>
  <div className='contacts-field'>
    <span className='field-title'>{props.title}</span>
    <p className='field-content'>{props.data}</p>
  </div>


export default ContactsField
