// import React, { Component } from 'react';
// import BarChart from 'react-bar-chart';
import { Chart } from 'react-charts';

// export class Achievements extends Component {
    
//     constructor(props){
//         super(props);
//         this.state={
//             width:500
//         }
//     }
    
//     // componentDidMount= () => {
//     //     window.onresize = () => {
//     //      this.setState({width: this.refs.root.offsetWidth}); 
//     //     };
//     //   }
//     render() {
//         const data = React.useMemo(
//             () => [
//               {
//                 label: 'Series 1',
//                 data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
//               },
//               {
//                 label: 'Series 2',
//                 data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
//               }
//             ],
//             []
//           )

//           const axes = React.useMemo(
//             () => [
//               { primary: true, type: 'linear', position: 'bottom' },
//               { type: 'linear', position: 'left' }
//             ],
//             []
//           )
//         return (
//             <div>
//            <div
//       style={{
//         width: '400px',
//         height: '300px'
//       }}
//     >
//       <Chart data={data} axes={axes} />
//     </div>
//         </div>
//         )
//     }
// }

// export default Achievements


// import React from 'react'

// export default function Achievements() {
//     const data = React.useMemo(
//         () => [
//           {
//             label: 'Series 1',
//             data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
//           },
//           {
//             label: 'Series 2',
//             data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
//           }
//         ],
//         []
//       )

//       const axes = React.useMemo(
//         () => [
//           { primary: true, type: 'linear', position: 'bottom' },
//           { type: 'linear', position: 'left' }
//         ],
//         []
//       )
//     return (
//         <div>
//        <div
//   style={{
//     width: '400px',
//     height: '300px'
//   }}
// >
//   <Chart data={data} axes={axes} />
// </div>
//     </div>
//     )
   
// }

import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  
  const data = [
    {
      name: 'Page A', amt:5555
    },
    {
      name: 'Page B', amt:5555
    },
    {
      name: 'Page C', amt:5555
    },
    {
      name: 'Page D', amt:5555
    },
    {
      name: 'Page E', amt:5555
    },
    {
      name: 'Page F', amt:5555
    },
    {
      name: 'Page G', amt:5555
    },
    {
      name: 'Page A', amt:5555
    },
    {
      name: 'Page B', amt:5555
    },
    {
      name: 'Page C', amt:5555
    },
    {
      name: 'Page D', amt:5555
    },
    {
      name: 'Page E', amt:5555
    },
    {
      name: 'Page F', amt:5555
    },
    {
      name: 'Page G', amt:5555
    },
  ];

export class Achievements extends Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';
    render() {
        return (
          <div style={{height:"83vh",display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <h1 style={{textAlign:"center"}}>Achievements</h1>
            <div style={{marginTop:50}}>
              <h2 style={{textAlign:"center"}}>Weight</h2>
              <BarChart
                width={330}
                height={200}
                data={data}
                margin={{
                  top: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
              </BarChart>
            </div>

            <div>
              <h2 style={{textAlign:"center"}}>Height</h2>
              <BarChart
                width={330}
                height={200}
                data={data}
                margin={{
                  top: 20, bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amt" stackId="a" fill="orange" />
              </BarChart>
            </div>
          </div>
        )
    }
}

export default Achievements

