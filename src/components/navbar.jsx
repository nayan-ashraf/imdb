import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="d-flex flex-row mb-4 p-2" style={{'background-color': '#121212'}}>
                <div className="px-5">
                <img src="images/logo.png" width="70" height="30" style={{'display':'block'}}/>
                </div>
                


               
                <div class="input-group">
                    <input type="text" class="form-control" id="search" onKeyUp={this.props.search} />
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="fas fa-search"></i></span>
                        
                    </div>
                </div>

                
                    
                
            </div>
         );
    }
}
 
export default Navbar;