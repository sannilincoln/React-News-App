import React, { Component } from 'react'

export default class NewsUpload extends Component {
  render() {
    return (
      <div>
        <div className="container">
                 <h3 className="center"> News Upload Form</h3>
                <div className="input-field col s6">
                 <input placeholder="Title" id="Title" type="text" class="validate"/>
                <label for="Title">Title</label>
                </div>
                <div className="input-field col s6">
                 <input placeholder="Subject" id="Subject" type="text" class="validate"/>
                <label for="Subject">Subject</label>
                </div>
                <div className="input-field col s6">
                 <input placeholder="Category" id="Category" type="text" class="validate"/>
                <label for="Category">Category</label>
                </div>
                <div className="input-field col s6">
                 <textarea placeholder="Body" id="textarea1" className='materialize-textarea validate' type="text" />
                <label for="textarea1">Body</label>
                </div>
                <div className="input-field col s6">
                 <input placeholder="Author" id="Author" type="text" class="validate"/>
                <label for="Author">Author</label>
                </div>
                <div className="input-field col s6">
                 <input placeholder="Url To The Image" id="UrlToTheImage" type="text" class="validate"/>
                <label for="Url To The Image">Url To The Image</label>
                </div>
                <div className="input-field  col s6">
                <input type="text"  className="datepicker"/>
                <label for="Date">Date</label>
                </div>
                
                
                <div className="center">
                 <a href="/"  className="btn center-align">login</a>

       </div>
                
            </div>
      </div>
    )
  }
}
