import React, { Component } from 'react';
import Language from './Language';
//Removed and put in Routes and changed
// import LanguageList from '../../server/languages';

class LanguageContainer extends Component {
//   constructor(props) {
//   super(props);
//   this.state = { title: '', decription: '', img_src:'', id:''};
// }
// // handleInputChange(e) {
// //   const target = e.target;
// //   const title = target.setAttribute('title');
// //   const desc= target.setAttribute('description');
// //   // const updated = {};
// //   // updated[name] = value;
//   this.setState(Language);
// // }
// // handleSubmit(e) {
// //   e.preventDefault();
// //   // this.props.handleSubmit(this.state);
// // }
  render() {
    //setting data of languages as props for CourseContainer
//     // let languageList = LanguageList.javascript; Changed this bellow passed the route to data as props
    let languageList = this.props.route.data;
    let languages = languageList.map((language) => {
      return <Language title={this.state.language.title}
                     desc={this.state.language.description}
                     img={this.state.language.img_src}
                     key={this.state.language.id} />
    });
    return (
      <div>
        <ul>
          {languages}
        </ul>
      </div>
    );
  }
}

export default LanguageContainer;
