import { useState, useEffect } from "react";

import "./style.css"

import List from './List'
import Form from './Form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullName: "Cem",
            phoneNumber: "111111"
        }, {
            fullName: "Emma",
            phoneNumber: "222222"
        }, {
            fullName: "Anderson",
            phoneNumber: "333333"
        }

    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )

}

export default Contacts;


