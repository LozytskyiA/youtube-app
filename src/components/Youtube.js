import React, {Component} from 'react';
import axios from 'axios';
import VideoList from "./videoList/VideoList";
import Input from "./input/Input";
import MoreVideoButton from "./moreVideoButton/moreVideoButton";

const BASE_PATH = 'https://www.googleapis.com/youtube/v3';
const SEARCH_PATH = '/search';
const KEY ='AIzaSyDXQ1H2iW0GC1wlN5X_U55Lhv2VX3QSjc4';

class Youtube extends Component {

  state = {
    videos: null,
    searchQuery: '',
    result: [],
    maxResults: 10,
  };

  componentDidMount() {
    const { searchQuery } = this.state;
    this.axiosData((searchQuery))
  };

  axiosData = (searchQuery) => {
    const { maxResults } = this.state;

    axios.get(`${BASE_PATH}${SEARCH_PATH}`, {
      params: {
        part: 'snippet',
        key: KEY,
        q: searchQuery,
        type: 'video',
        maxResults: maxResults,
      }
    }).then(result => this.setNews(result.data.items))
      .catch(error => error)
  };

  setNews = result => {
    this.setState({ result })
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      searchQuery: value,
    })
  };

  getSearch = ({ key }) => {
    if(key === 'Enter') {
      const { searchQuery } = this.state;
      this.axiosData(searchQuery)
    }
    this.setState({maxResults: 10})
  };

  handleClickButton = () => {
    const { searchQuery } = this.state;
    this.axiosData(searchQuery);
    this.setState({maxResults: 10})
  };

  getMoreVideos = () => {
    const { searchQuery } = this.state;
    this.setState((state) =>
      ({maxResults: state.maxResults + 10}),() => this.axiosData(searchQuery));
  };

  render() {

    const { result, maxResults, searchQuery } = this.state;

    console.log(result);

    return (
      <>
        <Input
          onKeyPress={this.getSearch}
          onChange={this.handleInputChange}
          value={searchQuery}
          onClick={this.handleClickButton}/>
          <div className="youtube-videos">
            <ul className="youtube-videos-list">
              {result.map(item =>
                <VideoList
                  key={item.id.videoId}
                  title={item.snippet.title}
                  image={item.snippet.thumbnails.medium}
                  video={item.id.videoId}
                />)}
            </ul>
          </div>
        {maxResults >= 10
          ?
          <MoreVideoButton onClick={this.getMoreVideos} />
          : null
        }
      </>
    );
  }
}

export default Youtube;
