// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-bg-Container">
    <h1 className="Not-found-text">Page Not Found!!</h1>
    <Link to="/" className="not-found-back">
      {'<<Go Home >>'}
    </Link>
  </div>
)
export default NotFound
