import {labels, numTheme, regLabels, numRegion} from '../data';

let initState = {
  graphs: [
    {
     labels: labels,
     datasets: [{
       data: numTheme,
       backgroundColor: ['#FF8A65','#36a2eb','#cc65fe','#ffce56','#37D67A', '#b71c1c']
     }]
     },
     {
       labels: regLabels,
       datasets:[{
         data: numRegion,
         backgroundColor: ['#cc65fe','#36a2eb','#b71c1c']
       }]
     }
   ]
}

const graphReducer = (state = initState, action) => {
  return state;
}

export default graphReducer;
