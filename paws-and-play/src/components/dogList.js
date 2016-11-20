import React from 'react';

import DogView from './dogView'
import DogFilter from './dogFilter'


export default class DogList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "col-xs-12 col-sm-8 col-sm-offset-4">
        <DogFilter/>
        <DogView name='Ali' breed='Mutt' age='57' size='Small' temperament='Angry' description='She has lots of hair but is still always cold' photoUrl='https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Dog-bite-prevention.jpg?itok=3N2KTNkP'/>
        <br/>
        <DogView name='Jasper' breed='Puggle' age='23' size='Extra small' temperament='Anxious' description='Jasper likes music' photoUrl='http://cdn-www.dailypuppy.com/dog-images/tucker-the-puggle-3_57524_2011-04-12_w450.jpg'/>
        <br/>
        <DogView name='Colby' breed='black lab' age='12' size='Large' temperament='Quiet' description='Colby likes to run outside' photoUrl='https://s-media-cache-ak0.pinimg.com/736x/45/a4/e1/45a4e1a9dcddbd936c5586419842e397.jpg'/>
        <br/>
        <DogView name='Alice' breed='Corgi' age='26' size='Mediun' temperament='Proper' description='Alice is a British dog' photoUrl='http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/side-6.jpg'/>
        <br/>
        <DogView name='Sully' breed='German Shepherd' age='7' size='Large' temperament='Playful' description='Sully is very protective.' photoUrl='http://cdn1-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/pupporch-9.jpg'/>
      </div>
  )}
}
