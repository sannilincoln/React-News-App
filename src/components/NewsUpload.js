import React, { Component } from 'react'

export default class NewsUpload extends Component {
            state ={
              title: '',
              subject: "",
              category: "",
              body: '',
              author: '',
              urlToTheImage: '',
              date: ''
            }
              handleUpload=(e) =>{
                const nam = e.target.name;
            const val = e.target.value;
            this.setState({[nam]: val});
            console.log(this.state);
              }

              handleSubmit = (e) => {
                const {title,subject,category,body,author,urlToTheImage,date}= this.state;
                localStorage.setItem('title',title);
                localStorage.setItem('subject',subject);
                localStorage.setItem('category',category);
                localStorage.setItem('body',body);
                localStorage.setItem('author',author);
                localStorage.setItem('urlToTheImage',urlToTheImage);
                localStorage.setItem('date',date);
                alert('news Uploaded');               
              }

  render() {
    return (
      <div>
        <div className="container">
                 <h3 className="center"> News Upload Form</h3>
                  <form action="/" onSubmit={this.handleSubmit}>
                  <div className="input-field col s6">
                 <input name="title" onChange={this.handleUpload} id="title" type="text" className="validate"/>
                <label for="title">Title</label>
                </div>
                <div className="input-field col s6">
                 <input name="subject" onChange={this.handleUpload} id="subject" type="text" className="validate"/>
                <label for="subject">Subject</label>
                </div>
                <div className="input-field col s6">
                 <input name="category" onChange={this.handleUpload} id="category" type="text" className="validate"/>
                <label for="category">Category</label>
                </div>
                <div className="input-field col s6">
                 <textarea name='body' onChange={this.handleUpload} id="textarea1" className='materialize-textarea validate' type="text" />
                <label for="textarea1">Body</label>
                </div>
                <div className="input-field col s6">
                 <input name="author" onChange={this.handleUpload} id="author" type="text" className="validate"/>
                <label for="author">Author</label>
                </div>
                <div className="input-field col s6">
                 <input name='urlToTheImage' onChange={this.handleUpload} id="urlToTheImage" type="text" className="validate"/>
                <label for="url To The Image">Url To The Image</label>
                </div>
                <div className="input-field  col s6">
                <input name='date' onChange={this.handleUpload} type="text"  className=""/>
                <label for="date">Date</label>
                </div>
                <div className="center">
                <button  type="submit" className="btn red darken-3">Upload</button>
             </div>
                  </form>
                
            </div>
      </div>
    )
  }
}
