console.log("plots init")

TESTER = document.getElementById('tester');

Plotly.newPlot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], { 
    margin: { t: 0 } });

/* Current Plotly.js version */
console.log(Plotly.newPlot);
console.log( Plotly.version );