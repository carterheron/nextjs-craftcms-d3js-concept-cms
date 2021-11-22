import businessPriorities from "./d3Charts/businessPriorities";

let charts = document.getElementsByName("d3-object");
for (let i = 0; i < charts.length; i++) {

    let chartName = charts[i].getAttribute('id');

    switch (chartName) {
        case 'businessPriorities':
            let json = JSON.parse(charts[i].getAttribute('x-data'));
            businessPriorities(json);
            break;
        default:
            console.error('No chart found with name: ', chartName);
    }
}