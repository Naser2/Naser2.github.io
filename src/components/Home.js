import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
// import { Link } from 'react-router';

class Home extends Component {

  handleSubmit(event) {
    event.preventDefault();
    let searchSubject = event.target.elements[0].value;
    let searchTopic = event.target.elements[1].value;
    let path = `featured/${searchTopic}/${searchSubject}`;
    browserHistory.push(path);
  }

  render() {
    return (
      <div className="main-content home">
      <div><img src={'http://i.imgur.com/77pVApa.jpg'} alt="boohoo" className="img-responsive"/><span> {this.props.name}</span></div>
        <h2>Full Stack Software Developer</h2>
        <p>This is an About Me page to connect with the world <em> Learn </em> General Assembly.</p>
        <p>I'm Full Stack mean Software Developer fresh from General Assembly's Immersive Program, a well known institution. I have Javascript, HTML5, Ruby on Rails, React, Styles Css under my belt . I am also an artist that is known for my excellent communication skills.I am very passionate about helping others and using my voice to reach out to those in need.   I am a quick learner that does not give up when "the going gets tough”. I love web development and have recently built a CRUD application for projects using Javascript and React, amongst others. I am optimistic, enjoy web development and am looking forward to experience growth on the professional side of tech.
        </p>
        <p>I have few projects created with several languages and I will like to share them with you on while on this journey and keep you up todate on new techologies .</p>
        <hr />

        <h3> Featured Docs </h3>
        <h4>Nas Suggested Docs</h4>
        <Link to="featured/HTML/Tech"> New Technologies></Link>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Subject"/>
          <input type="text" placeholder="Topic"/>
          <button type="submit">submit!</button>
        </form>
      </div>
    );
  }
}

export default Home;
