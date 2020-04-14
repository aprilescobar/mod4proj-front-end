import React from 'react'
import Bottoms from './Bottoms'


export default class CreateOutfit extends React.Component {

    state = {
        collectBottom: []
    }

    getBottom = bottomId => {
        // <Bottoms getBottom={this.getBottom}/>
        console.log("made it to Create Outfits", bottomId)
        this.setState({collectBottom: [...this.state.collectBottom, bottomId]})
    }

    // bottomsPage = () => {
    //    return <Bottoms getBottom={this.getBottom}/>
    // }
    
    render () {
        console.log(this.state)
        return (
            <div>
                Create Outfit!
                {<Bottoms getBottom={this.getBottom}/>}
            </div>
        )
    }
}