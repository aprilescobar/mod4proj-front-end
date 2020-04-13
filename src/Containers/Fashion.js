// import React from 'react'
// import Bottoms from './Bottoms'
// import ProductCard from '../Components/ProductCard'


// export default class Fashion extends React.Component {

//     state = {
//         bottoms: []
//     }

//     componentDidMount() {
//     fetch('http://localhost:3000/bottoms')
//     .then(res => res.json())
//     .then(bottoms => this.setState({bottoms}))
//     }

//     renderBottoms = () => {
//         return this.state.bottoms.map(bottom => {
//             return <ProductCard key={bottom.id} bottom={bottom} />
//         })
//     }

//     render () {
//         // console.log(this.state.bottoms)
//         return (
//             <div>
//                 <Bottoms bottoms={this.state.bottoms} />
//             </div>
//         )
//     }
// }