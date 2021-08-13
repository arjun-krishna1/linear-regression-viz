function makePoint(x, y)
{
    return {x: x, y: y};
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



let learningRate = 0.01;
let points = [makePoint(0.5, 1.4), makePoint(2.3, 1.9), makePoint(2.9, 3.2)];
console.log(loss(points, 1, 0));