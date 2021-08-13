//loss function functions
function makePoint(x, y)
{
    return {x: x, y: y};
}

function makePoints(xs, ys)
{
    var points = [];
    for (var i = 0; i < Math.min(xs.length, ys.length); i++)
    {
        points.unshift(makePoint(xs[i], ys[i]));
    }
    return points
}

function stepSize(iloss, sloss, learningRate)
{
    return {stepIntercept: iloss * learningRate, stepSlope: sloss * learningRate};
}

function loss(points, slope, intercept, learningRate = 0.01)
{
    var iloss = 0, sloss = 0;
    points.forEach(point => {
        iloss += -2 * (point.y - (intercept + slope * point.x));
        sloss += -2 * point.x * (point.y - (intercept + slope * point.x));
    });
    return stepSize(iloss, sloss, learningRate);
}

function getPoints(slope, inter)
{
    return {x: [0, 10], y: [inter, slope * 10 + inter]}
}

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
    let slope = generateFromMax(max_slope);
    let intercept = generateFromMax(Math.max(...y));

    return [slope, intercept];
}

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

// line_points = {
//     "x": [0, 1],
//     "y": [0, 1]
// }

// let trace_line = {
//     "x": line_points.x,
//     "y": line_points.y,
//     mode:"line",
//     type: "scatter"
// }

let init_res = initializeLine(points.x, points.y);

let init_slope = init_res[0];
let init_intercept = init_res[1];

let max_x = Math.max(...points.x); 

let line_points = {
    "x": [
        0, max_x
    ],
    "y": [
        init_intercept, init_intercept + init_slope*max_x
    ]
}

function makeData(slope, intercept)
{
    let trace_line = {
        "x": [0, 10],
        "y": [intercept, slope * 10 + intercept]
    }
    return [trace_points, trace_line]
}

let slope = -10;
let intercept = 15; 

let data = makeData(slope, intercept)

Plotly.newPlot(TESTER, data);

// function loop(n)
// {
//     console.log(n);
//     let values = loss(makePoints(points.x, points.y), slope, intercept);
//     slope -= values.stepSlope;
//     intercept -= values.stepIntercept;
//     Plotly.newPlot(TESTER, makeData(slope, intercept));
//     setTimeout(() => {
//         loop(n - 1);
//     }, 1);

// }
// loop(100);




// console.log( Plotly.version );
console.log(trace_line);

let data = [trace_points, trace_line];

Plotly.newPlot( TESTER, data);
