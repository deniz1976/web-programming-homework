new Morris.Line({
    
    element: 'myfirstchart',
    
    lineColors: ['orange'],
    data: [
        { year: '2019', value: 1.576 },
        { year: '2020', value: 1.500 },
        { year: '2021', value: 2.000 },
        { year: '2022', value: 1.500 },
        { year: '2023', value: 0.350 }

    ],
    
    xkey: 'year',
    
    ykeys: ['value'],
    
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

