import { Link } from 'react-router-dom'
import LanguageSelect from "./LanguageSelect";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <p>{t('copyright')} &copy; 2021</p>
            <div className="language-select">
                <LanguageSelect />
            </div>
            <Link to='/about'>{t('about')}</Link>
        </footer>
    )
}

export default Footer
