import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails
  const matchStatustextClassName =
    matchStatus === 'Won' ? 'won-status-color' : 'lose-status-color'
  return (
    <li className="match-item-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-item-competingTeamLogo"
      />
      <p className="match-item-competingTeam-name">{competingTeam}</p>
      <p className="match-item-result">{result}</p>
      <p className={matchStatustextClassName}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
