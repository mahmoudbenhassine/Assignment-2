import { useState } from 'react';
import './addItem.css'

const AddItem=(props)=> {
    const categoriesSet = props.categories;
    const [name, setName] = useState("Enter a Name")
    const [note, setNote] = useState("Enter a Note");
    const [image, setImage] = useState("Enter an URL");
    const [category, setCategory] = useState("Enter a category");

    const [save, setSave] = useState(false);

    const saveItem=()=> {
        setCategory(document.querySelector("#select").value);
        setSave(true);
    }
    return (

        <div>
            {
                save ?

                    <div className="revueItem">
                        <button onClick={() => { setSave(false) }}><span className="material-icons">keyboard_backspace</span>Back</button>
                        <img alt="itemImage" src={image} />
                        <label>Name</label>
                        <h1>{name}</h1>
                        <label>category</label>
                        <h1>{category}</h1>
                        <label>note</label>
                        <h1>{note}</h1>
                        <div className="btnWrapper">
                            <button>delete</button>
                            <button>Add to List</button>
                        </div>
                    </div>
                    :
                    <div className="addItemPannel">
                        <h2 > Add New Item</h2>
                        <label>Name</label>
                        <input required value={name} onClick={(e) => { setName("") }} onChange={(e) => { setName(e.target.value) }}></input>
                        <label>Note (optional)</label>
                        <input value={note} onClick={(e) => { setNote("") }} onChange={(e) => { setNote(e.target.value) }} id="noteInput" ></input>
                        <label>Image (optional)</label>
                        <input value={image} onClick={(e) => { setImage("") }} onChange={(e) => { setImage(e.target.value) }}></input>
                        <label required  >Category</label>
                        <select id="select">
                            {categoriesSet.map(element => { return <option value={element}>{element}</option> })}
                        </select>

                        <div className="btnWrapper">
                            <button onClick={() => { props.cancel() }}> Cancel</button>
                            <button onClick={saveItem}> Save</button>
                        </div>
                    </div>

            }
        </div>

    )
}

export default AddItem;