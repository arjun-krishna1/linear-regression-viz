function generateFromMax(max) {
    console.log("max ", max);
    return 4*Math.random()*max - 2*max;
}

function initializeLine(x, y) {
    
    let max_slope;
    // get the maximum size of slope between any two points
    for (let i = 0; i < y.length; i++) {
        for (let j = i + 1; j < y.length; j ++) {
            let this_slope = Math.abs(
                (y[j] - y[i]) / (x[j] - x[i])
            );

            if (!max_slope || max_slope < this_slope) {
                max_slope = this_slope;
            }

        }
    }
    
    // choose an intercept and slope that is 
    console.log("max_slop")
    let slope = generateFromMax(max_slope);
    let intercept = generateFromMax(Math.max(...y));
    console.log("slope, intercept ", slope, intercept);

    return [slope, intercept];
}

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

let init_res = initializeLine(points.x, points.y);

let init_slope = init_res[0];
let init_intercept = init_res[1];


console.log('init_stuff', init_slope, init_intercept);
let max_x = Math.max(...points.x); 

console.log('init_slope ', init_slope)

let line_points = {
    "x": [
        0, max_x
    ],
    "y": [
        init_intercept, init_intercept + init_slope*max_x
    ]
}

let trace_line = {
    "x": line_points.x,
    "y": line_points.y,
    mode:"line",
    type: "scatter"
}

console.log(trace_line);
let data = [trace_points, trace_line];

Plotly.newPlot( TESTER, data);

console.log( Plotly.version );