import React from 'react';

// class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <label htmlFor="bar">bar</label>
//                 <input type="text" onChange={() => console.log("hello")} />
//             </React.Fragment>
//         );
//     }
// }
const App = () => {
    return <div>Hi!<Cat /></div>
}
const Cat = () => {
    return <div>Meow!</div>
}



export default App;
