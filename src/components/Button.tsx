import PropTypes from 'prop-types'

interface PropTypes {
    color: string,
    text: string,
    onClick: () => void,
}

const Button = ({ color, text, onClick }: PropTypes) => {
    return (
        <button className='btn' style={{ backgroundColor: color }} onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'blue',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}

export default Button
