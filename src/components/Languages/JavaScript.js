import React, { Component } from 'react';

import Language from './Language';
import LanguageList from '../../server/languages';

class JavaScript extends Component {
  render() {
    let languageList = LanguageList.JS;
    let languages = languageList.map((language) => {
      return <Language title={language.title}
                     desc={language.description}
                     img={language.img_src}
                     key={language.id} />
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

export default JavaScript;
