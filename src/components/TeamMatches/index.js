// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    let {latestMatchDetails, recentMatches} = updatedData
    latestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    recentMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    console.log(latestMatchDetails)
    console.log(recentMatches)
    this.setState({
      teamBannerUrl: updatedData.teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading: false,
    })
  }

  renderTemamMatchesDetails = () => {
    const {teamBannerUrl, recentMatches, latestMatchDetails} = this.state
    return (
      <>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-img"
        />
        <h1 className="latest-matches-text">Latest Matches</h1>
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <ul className="Match-cards-list-container">
          {recentMatches.map(eachMatch => (
            <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
        <Link to="/" className="back">
          {'<<<  Back  '}
        </Link>
      </>
    )
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading} = this.state
    console.log(isLoading)
    return (
      <div className={`Team-Matches-bg-container bg1 ${id}`}>
        <div className="team-matches-width-container">
          {isLoading ? (
            <div data-testid="loader" className="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            this.renderTemamMatchesDetails()
          )}
        </div>
      </div>
    )
  }
}
export default TeamMatches
