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
    console.log("loss ", iloss, sloss);
    return stepSize(iloss, sloss, learningRate);
}

function getPoints(slope, inter)
{
    return {x: [0, 10], y: [inter, slope * 10 + inter]}
}

let learningRate = 0.01;
let points = [makePoint(0.5, 1.4), makePoint(2.3, 1.9), makePoint(2.9, 3.2)];
let slope = 1, inter = 0;
for (var i =0; i < 10; i++)
{
    let values = loss(points, slope, inter);

    slope += values.stepSlope;
    inter += values.stepIntercept;
    // console.log("weights ", slope, inter);
}
console.log(loss(points, 1, 0));