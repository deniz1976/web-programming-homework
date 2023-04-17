new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    lineColors: ['orange'],
    data: [
        { year: '2019', value: 1.576 },
        { year: '2020', value: 1.500 },
        { year: '2021', value: 2.000 },
        { year: '2022', value: 1.500 },
        { year: '2023', value: 0.350 }

    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});
Morris.Donut({
    element: 'donut-example',
    data: [
        { label: "Samsung TV", value: 31 },
        { label: "Washing machine", value: 30 },
        { label: "iMac", value: 20 },
        { label: "iphone 13", value: 5 },
        { label: "Fridge", value: 22 }
    ],
    labelColor: '#ffffff',
    colors: ['orange', '#0072f2', '#f42a26', '#87cefa', '#32cd32']
});
//degree part
let kitchenDegree = parseInt(localStorage.getItem('kitchenDegree')) || 25; // default değer 25
document.getElementById('kitchenDegree').innerHTML = kitchenDegree + '°C';


document.getElementById('hot').addEventListener('click', function () {
    if (kitchenDegree < 30) {
        kitchenDegree++;
        document.getElementById('kitchenDegree').innerHTML = kitchenDegree + '°C';
        localStorage.setItem('kitchenDegree', kitchenDegree);
    }
    else {
        kitchenDegree = 30;
        document.getElementById('kitchenDegree').innerHTML = kitchenDegree + '°C';
        localStorage.setItem('kitchenDegree', kitchenDegree);
    }
});


document.getElementById('cold').addEventListener('click', function () {
    if (kitchenDegree > 17) {
        kitchenDegree--;
        document.getElementById('kitchenDegree').innerHTML = kitchenDegree + '°C';
        localStorage.setItem('kitchenDegree', kitchenDegree);
    }
    else {
        kitchenDegree = 17;
        document.getElementById('kitchenDegree').innerHTML = kitchenDegree + '°C';
        localStorage.setItem('kitchenDegree', kitchenDegree);
    }
});
//Light part
const wifiCheckbox = document.querySelector('#router input[type="checkbox"]');

wifiCheckbox.addEventListener('change', function () {
    localStorage.setItem('wifi', this.checked);
});


const savedWifiValue = localStorage.getItem('wifi');
if (savedWifiValue !== null) {
    wifiCheckbox.checked = savedWifiValue === 'true';
}
else {
    savedWifiValue = false;
}

const lightCheckbox = document.querySelector('#light input[type="checkbox"]');

lightCheckbox.addEventListener('change', function () {
    localStorage.setItem('light', this.checked);
});

const savedLightValue = localStorage.getItem('light');
if (savedLightValue !== null) {
    lightCheckbox.checked = savedLightValue === 'true';
}
else {
    savedLightValue = false;
}





