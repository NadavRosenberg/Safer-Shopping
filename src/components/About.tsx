import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const About = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h4>{t('version')}</h4>
            <Link to='/'>{t('go-back')}</Link>
        </div>
    )
}

export default About
