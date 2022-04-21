import { useState, useEffect } from "react";

function Form({ contacts, addContact }) {

    const initialFormValues = { fullName: "", phoneNumber: "" }

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])

    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullName === "" || form.phoneNumber === "") {
            return false;
        }
        console.log(form)

        addContact([...contacts, form]);


    }

    return (
        <form onSubmit={onSubmit}>
            <div >
                <div><input name="fullName" placeholder="Fullname" onChange={onChangeInput} value={form.fullName}></input></div>
                <div><input name="phoneNumber" placeholder="Phone Number" onChange={onChangeInput} value={form.phoneNumber}></input></div>

                <div className="btn">
                    <button>Add</button>
                </div>
            </div>
        </form>
    )

}

export default Form;


