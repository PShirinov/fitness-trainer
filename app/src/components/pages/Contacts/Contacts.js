import React,{ Component } from 'react'
import ContactsField from '../../ContactsField/ContactsField.js';
import Map from '../../Map/Map.js';
import './Contacts.scss'

const dataContacts = {
  adressTitle: 'ADRESS',
  adress: '123, Rev Avenu, Hawai',

  phoneTitle: 'PHONE',
  phone: '+38 (050) 315 41 23',

  emailTitle: 'EMAIL',
  email: 'email@email.com',

  storeTitle: 'STORE',
  store: '123, Rev Avenu, Hawai'
}

const Contacts = () =>
  <div className='contacts'>
    <h1 className='contacts-title'>Контакты</h1>
    <div className='contacts-content'>
      <div className='contacts-info'>
        <ContactsField
            title={dataContacts.adressTitle}
            data={dataContacts.adress}
        />
        <ContactsField
            title={dataContacts.phoneTitle}
            data={dataContacts.phone}
        />
        <ContactsField
            title={dataContacts.emailTitle}
            data={dataContacts.email}
        />
        <ContactsField
            title={dataContacts.storeTitle}
            data={dataContacts.store}
        />
      </div>
      <Map />
    </div>

  </div>

export default Contacts
