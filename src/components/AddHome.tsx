import {FormEvent, useState} from 'react'
import db from '../firebase'
import CreateHome from '../interfaces/create-home';
import { useTranslation } from 'react-i18next';

const AddHome = () => {
    const { t } = useTranslation();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
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
            price,
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
                <label>{t('title')}</label>
                <input type='text' placeholder={t('add-title')} value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>{t('price')}</label>
                <input type='number' placeholder='Add Price' value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
            </div>
            <div className='form-control'>
                <label>{t('address')}</label>
                <input type='text' placeholder={t('add-address')} value={address}
                       onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>{t('notes')}</label>
                <input type='text' placeholder={t('add-notes')} value={notes} onChange={(e) => setNotes(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Timer</label>
                <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value={t('save-home').toString()} className='btn btn-block'/>
        </form>
    )
}

export default AddHome
