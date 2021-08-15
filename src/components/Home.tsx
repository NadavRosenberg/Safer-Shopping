import { FaTimes } from 'react-icons/fa'
import Home from '../interfaces/Home'

interface PropTypes {
    home: Home,
    onDelete: (uuid: string) => void,
    onToggle: (uuid: string) => void,
}

const Task = ({ home, onDelete, onToggle }: PropTypes) => {
    return (
        <div className={`task ${home.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(home.key)}>
            <h3>
                {home.title}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(home.key)}/>
            </h3>
            <p>{home.address}</p>
            <p>{home.notes}</p>
        </div>
    )
}

export default Task
