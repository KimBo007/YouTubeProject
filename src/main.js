import React, {Component} from 'react'
import {render} from 'react-dom'
import SearchBar from './SearchBar'
import YTSearch from 'youtube-api-search'
import VideoList from './video_list'
import VideoDetail from './video_detail'
import _ from 'lodash'


const API_KEY ='AIzaSyBByKCeGYgkr2-xiBarsYN_jhGL8i9Gn4A'

class App extends Component {
  constructor(props){
   super(props);
    
    this.state = {videos : [],
                 selectedVideo: null
                 };
    this.videoSearch('react tutorial');
}

 videoSearch(term){
   YTSearch({key: API_KEY, term: term},(videos)=>{
    console.log(videos);
    this.setState({ videos : videos,
                selectedVideo : videos[0]
               });
   });
 }
  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
    
     return (
     <div className="space_small">
        <SearchBar onSearchTermChange={videoSearch}/>
         <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
     </div>
   );
  }
}

render(<App />, document.querySelector('#app'))