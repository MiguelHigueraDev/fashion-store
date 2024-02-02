import { PropTypes } from 'prop-types'

const Error = ({message}) => {
  return (
    <div className='mt-[100px] text-center'>
        <h2 className="text-5xl uppercase tracking-widest font-bold">An error has occurred:</h2>
        <p className="text-2xl text-red-600 mt-4">{message}</p>
    </div>
  )
}

Error.propTypes = {
    message: PropTypes.string
}

export default Error