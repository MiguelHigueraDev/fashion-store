import { PropTypes } from 'prop-types'

const Cart = ({isOpen}) => {
    if(isOpen) {
        return (
            <div>open</div>
        )
    } 
}
Cart.propTypes = {
    isOpen: PropTypes.bool
}

export default Cart