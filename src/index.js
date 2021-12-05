import * as d3 from 'd3'
import chart from './chart'

function component() {
  const element = document.createElement('div')

  element.innerHTML = ('Daargh webpack')

  return element
}

function addContainer() {
  const element = document.createElement('div')

  element.className = 'container'
  
  return element
}

const run = async () => {
  let dataset = await d3.tsv('./data.tsv')

  const container = d3.select('.container');
  const barChart = chart();

  barChart
    .width(300)
    .height(200)
    .margin({
      left:50,
      bottom: 30
    })
    .on('customMouseOver', function(event, data) {
      console.log('data', data);
    })

  container.datum(dataset).call(barChart);
}
document.body.appendChild(component())
document.body.appendChild(addContainer())
run()



