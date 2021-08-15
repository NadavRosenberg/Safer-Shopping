import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import {useTranslation} from "react-i18next";

interface PropTypes {
    onAdd: () => void,
    showAdd: boolean,
}

const Header = ({ onAdd, showAdd }: PropTypes) => {
    const location = useLocation()
    const { t } = useTranslation();

    return (
        <header className='header'>
            <h1>{t('app-name')}</h1>
            {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? t('close') : t('add')} onClick={onAdd} />}
        </header>
    )
}

export default Header
