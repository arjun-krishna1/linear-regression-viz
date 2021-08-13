
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

//plotting code
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

