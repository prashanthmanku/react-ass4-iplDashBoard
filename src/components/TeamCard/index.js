// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {temDetails} = props
  const {id, name, teamImageUrl} = temDetails

  return (
    <li className="team-card-item-container">
      <Link to={`/team-matches/${id}`} className="match-nav-link">
        <img src={teamImageUrl} alt={name} className="team-item-img" />
        <p className="team-item-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
