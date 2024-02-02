import Header from './Header'
import { PropTypes } from 'prop-types'

const Main = ({children}) => {
  return (
    <div className="py-2 px-5 my-2">
        <Header />
        {children}
    </div>
  )
}

Main.propTypes = {
    children: PropTypes.any
}

export default Main