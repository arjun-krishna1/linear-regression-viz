console.log("plots init")

TESTER = document.getElementById('tester');

points = {
    "x": [1, 1.5, 3.3, 4.5, 5],
    "y": [1, 5, 10, 11, 12, 16]
}

let trace_points = {
    x: points.x,
    y: points.y,
    mode: 'markers',
    type: 'scatter'
};

line_points = {
    "x": [1, 5],
    "y": [1, 16]
}

let trace_line = {
    "x": line_points.x,
    "y": line_points.y,
    mode:"line",
    type: "scatter"
}

let data = [trace_points, trace_line];

Plotly.newPlot( TESTER, data);

console.log( Plotly.version );