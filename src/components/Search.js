import React , {Component} from 'react';
import 'bulma/css/bulma.css';


class Search extends Component {

render(){

  return (
                <div className="container">
                    <div id="flow">
                        <span className="flow-1"></span>
                        <span className="flow-2"></span>
                        <span className="flow-3"></span>
                    </div>

                    <div className="section">
                        <div className="box">
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <input className="input has-text-centered" type="search" placeholder="Find what you looking for..."/>
                                </div>
                                <div className="control">
                                    <a className="button is-info">Search</a>
                                </div>
                            </div>
                        </div>
                     </div>
                  </div>
            );
}

}

export default Search;
