import businessPriorities from "./businessPriorities";

function init() {
    let chart = document.getElementById('businessPriorities');
    let json = JSON.parse(chart.getAttribute('x-data'));
    businessPriorities(json);
}

export default init;