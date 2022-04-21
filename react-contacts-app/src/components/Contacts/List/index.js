import {useState} from "react";

function List({contacts}){

    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        console.log(item);
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterText.toLowerCase());
        })
    })

    console.log("filtered: ", filtered);

    return(
        <div>

            <input 
                placeholder="Filter contact" 
                value={filterText} 
                onChange={(e) => setFilterText(e.target.value)}>        
            </input>

            <ul className="list">
                {
                    filtered.map((contact, idx) => <li key={idx}>
                        <span>{contact.fullName}</span>
                        <span>{contact.phoneNumber}</span>
                    </li>)
                }
            </ul>

            <p>
                Total contacts ({filtered.length})
            </p>
        </div> 
    )
}

export default List;