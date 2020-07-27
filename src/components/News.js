import React, { Component } from 'react';

class News extends Component {
 
      state = {
         news: []
      }
      componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=ng&apiKey=5682fecfdda74345bdc321c058110de0')
        .then(Response => Response.json())
        .then((data) => 
          {this.setState({news:data.articles})
        // console.log(this.state.news)
       //console.log(Array.isArray(this.state.news))
        })
        //.catch(console.log)
      }   
      
  render() {
        const {news} =this.state;
        const newsList = news.length ? (news.map(news =>{
          return (
            <div className="post card hoverable "  key={news.id}>
              <div className="card-image">
                <img src={news.urlToImage} alt=""/>

              </div>
              <div className="card-content">
                <span className="card-title">{news.title}</span>
                  <p className='trunca'>{news.content}</p>
                 </div>
                 <div className="card-action">
                   <a href={news.url}>Read more....</a>
                 </div>         
            
      </div>
          )
        })) : (
          <div className="center"><h4>Waiting for News......</h4></div>
        )
    return (
      <div className='container'>
         <div className="col s8">
          {newsList}
          </div>
      </div>
      
    );
  }
}

export default News;