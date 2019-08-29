let initState = {
  graphs: [
    {
     labels: ['Children', 'Human Rights', 'Economic', 'Climate Change', 'Education'],
     datasets: [{
       data: ['700', '550', '400', '150', '400'],
       backgroundColor: ['#FF8A65','#36a2eb','#cc65fe','#ffce56','#37D67A']
      }]
   },
  ]
}

const graphReducer = (state = initState, action) => {
  return state;
}

export default graphReducer;
