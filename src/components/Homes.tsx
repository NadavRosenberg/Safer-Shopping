import Home from '../interfaces/Home'
import Task from './Home'

interface PropTypes {
    homes: Home[],
    onDelete: (uuid: string) => void,
    onToggle: (uuid: string) => void,
}

const Homes = ({homes, onDelete, onToggle}: PropTypes) => {
    return (
        <>
            {homes.map(home => (
                <Task key={home.key} home={home} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Homes
