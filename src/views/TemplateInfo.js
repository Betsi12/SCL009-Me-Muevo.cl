import React, { Component } from 'react';

// const TemplateInfo = () => {
    
//         return (
// <div>
//     <h1> Info disease </h1>
// </div>
//         )
    
// }
/*testing react.createRef()*/
class TemplateInfo extends Component{
    constructor(){
        super()
        this.text = React.createRef()
    }

    render(){
        return(
            <div>
    <h1 ref={this.text}> Info disease </h1>
</div>
        )
    }
}

export default TemplateInfo;