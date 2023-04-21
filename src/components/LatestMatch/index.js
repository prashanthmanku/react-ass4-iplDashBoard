// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-details-container">
      <div className="latest-match-container1">
        <div className="latest-match-content">
          <p className="competingTeam-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competingTeamLogo"
        />
      </div>

      <div className="latest-match-container2">
        <p className="innings-heading">First Innings</p>
        <p className="innings-value">{firstInnings}</p>
        <p className="innings-heading">Second Innings</p>
        <p className="innings-value">{secondInnings}</p>
        <p className="innings-heading">Man Of The Match</p>
        <p className="innings-value">{manOfTheMatch}</p>
        <p className="innings-heading">Umpires</p>
        <p className="innings-value">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
