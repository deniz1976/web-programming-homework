new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  lineColors:['orange'],
  data: [
    { year: '2019', value: 1.576 },
    { year: '2020', value: 1.500 },
    { year: '2021', value: 2.000 },
    { year: '2022', value: 1.500 },
    { year: '2023', value: 0.350 }
  
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});
Morris.Donut({
  element: 'donut-example',
  data: [
    {label: "Samsung TV", value: 31},
    {label: "Washing machine", value: 30},
    {label: "iMac", value: 20},
    {label: "iphone 13", value: 5},
    {label: "Fridge", value: 22}
  ],
  labelColor:'#ffffff',
  colors:['orange','#0072f2','#f42a26','#87cefa','#32cd32']
});
