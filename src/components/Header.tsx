import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

interface PropTypes {
    title: string,
    onAdd: () => void,
    showAdd: boolean,
}

const Header = ({ title='Task  Tracker', onAdd, showAdd }: PropTypes) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
        </header>
    )
}

export default Header
