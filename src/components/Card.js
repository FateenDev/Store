import React , {Component} from 'react';
import 'bulma/css/bulma.css';



class Card extends Component {

  constructor(props){
    super(props);
     console.log(Object.entries(this.props.data.title));
  }

  render(){

    return (
      <div>
      <div className="container">
      <div className="section">
      <div className="row columns">

{this.props.data.title.map((key,val) =>

      <div className="column is-one-third">
          <div className="card large">
              <div className="card-image">
                  <figure className="image">
                       <img src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop=" alt="Image" />
                  </figure>
              </div>
              <div className="card-content">
                  <div className="media">
                      <div className="media-left">
                          <figure className="image is-96x96">
                            <img src="https://cdn.discordapp.com/avatars/244932903530659841/0c924a19fcf1b5c59bc9dc1b58b61bb0.jpg?size=1024" alt="Image"/>
                          </figure>
                      </div>
                      <div className="media-content">
                          <p className="title is-4 no-padding">{this.props.data.name[val]}</p>
                          <p><span className="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
                          <p className="subtitle is-6">{this.props.data.desc[val]}</p>
                      </div>
                  </div>
                  <div className="content">
                      {this.props.data.detail[val]}
                      <div className="background-icon"><span className="icon-twitter"></span></div>
                  </div>
              </div>
          </div>
      </div>
)}
     </div>
    </div>
   </div>
  </div>

    );

  }

}

export default Card ;
