import React from 'react';

class AboutPage extends React.Component {
  render = () => {
    return (
      <div className="TextPage">
        <h1>About glue.fm</h1>
        <p><i>Someone made it, so you could hear it.</i></p>

        <div className="Text">
          <p>Music brings friends together and glue.fm amplifies this notion by helping people share music. Most messaging apps are not tuned for this purpose and we seek to do this more optimially.</p>

          <b>glue.fm has useful features built on top of standard chat:</b>
          <ul>
            <li>Automatic translation between steaming platforms</li>
            <li>Export playlists of shared music or only <i>unheard</i> tracks</li>
            <li>Thread based commenting on tracks</li>
          </ul>

          <p>If you would like to contact us, please reach out to contact@glue.fm. We are fully open source and welcome contribution to <a href="https://github.com/jborrey/glue-fm">the codebase.</a></p>

          <p> Why <i>glue.fm?</i> - we really like Bicep.</p>
        </div>
      </div>
    );
  };
}

export default AboutPage;
