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
  ];

export class Achievements extends Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';
    render() {
        return (
            <div>
                  <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
        <Bar dataKey="uv" fill="#ffc658" />
      </BarChart>
                
            </div>
        )
    }
}

export default Achievements

