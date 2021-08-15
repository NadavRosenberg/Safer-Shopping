import {FormEvent, useState} from 'react'
import db from '../firebase'
import Home from '../interfaces/Home';
import CreateHome from '../interfaces/create-home';

interface PropTypes {
    homes: Home[];
    setHomes: React.Dispatch<React.SetStateAction<Home[]>>;
}

const AddHome = ({homes, setHomes}: PropTypes) => {
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');
    const [reminder, setReminder] = useState(false);


    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!title) {
            alert('Please add a task')
            return
        }

        const newHome: CreateHome = {
            title,
            address,
            notes,
            reminder,
        }
        db.child('home').push(newHome, err => {
            console.log(err);
        })
    }

    return (
        <form className='add-form pop-in' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>title</label>
                <input type='text' placeholder='Add Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>address</label>
                <input type='text' placeholder='Add Address' value={address}
                       onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>notes</label>
                <input type='text' placeholder='Add Notes' value={notes} onChange={(e) => setNotes(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Timer</label>
                <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddHome
