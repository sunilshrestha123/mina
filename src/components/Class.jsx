import  React from 'react'


class Sunil extends React.Component{
    constructor(){
        super();
        this.state={color:'red is the color'}
    }
    render(){
     
        return(
<div>hello Nepal these is sunil shrestha {this.state.color}
     </div>

        )
    }
}
export default Sunil;
