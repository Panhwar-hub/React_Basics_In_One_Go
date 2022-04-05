import React from 'react'

const UpdatedComponent = (OriginolComponent, increment) => {
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {count :0}
            
        }
        incrementCount = () =>{
            this.setState(prevState => {
                return {count: prevState.count + increment}
            })
        }
        render() {
            return <OriginolComponent count ={this.state.count} incrementCount ={this.incrementCount} {... this.props.name} />
        }
    }
    return NewComponent
}

export default UpdatedComponent;