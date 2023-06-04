// new Morris.Line({
//     // ID of the element in which to draw the chart.
//     element: 'myfirstchart',
//     // Chart data records -- each entry in this array corresponds to a point on
//     // the chart.
//     lineColors: ['#00A36C'],
//     data: [
//         { year: '2019', value: 1.576 },
//         { year: '2020', value: 1.500 },
//         { year: '2021', value: 2.000 },
//         { year: '2022', value: 1.500 },
//         { year: '2023', value: 0.350 }

//     ],
//     // The name of the data record attribute that contains x-values.
//     xkey: 'year',
//     // A list of names of data record attributes that contain y-values.
//     ykeys: ['value'],
//     // Labels for the ykeys -- will be displayed when you hover over the
//     // chart.
//     labels: ['Value']
// });
// Morris.Donut({
//     element: 'donut-example',
//     data: [
//         { label: "Samsung TV", value: 42 },
//         { label: "Washing machine", value: 28 },
//         { label: "iMac", value: 21 },
//         { label: "iphone 13", value: 6 },
//         { label: "Fridge", value: 22 }
//     ],
//     labelColor: '#ffffff',
//     colors: ['#00A36C', '#274C77', 'orange', '#274C77', '#E6E6FA']
// });

// // function getRandomInt(max) {
// //     return Math.floor(Math.random() * max);
// // }

// //degree part
// let kitchenDegree = parseInt(localStorage.getItem('kitchenDegree')) || 17;
// let livingDegree = parseInt(localStorage.getItem('livingDegree')) || 17;
// let bedroomDegree = parseInt(localStorage.getItem('bedroomDegree')) || 17;
// let kitchenDegreeB = parseInt(localStorage.getItem('kitchenDegreeB')) || 0;
// let livingDegreeB = parseInt(localStorage.getItem('livingDegreeB')) || 0;
// let bedroomDegreeB = parseInt(localStorage.getItem('bedroomDegreeB')) || 0;
// let kitchenWifi = parseInt(localStorage.getItem('kitchenWifi')) || 0;
// let livingWifi = parseInt(localStorage.getItem('livingWifi')) || 0;
// let bedroomWifi = parseInt(localStorage.getItem('bedroomWifi')) || 0;
// let kitchenLight = parseInt(localStorage.getItem('kitchenLight')) || 0;
// let livingLight = parseInt(localStorage.getItem('livingLight')) || 0;
// let bedroomLight = parseInt(localStorage.getItem('bedroomLight')) || 0;
// let savedLightValue;
// let savedWifiValue;
// let current = "kitchen";
// localStorage.setItem("current", current);

// getCurrent();



// document.getElementById('hot').addEventListener('click', function () {
//     if (kitchenDegreeB == 1) {
//         if (current == "kitchen") {
//             if (kitchenDegree < 30) {
//                 kitchenDegree++;
//                 document.getElementById("degree").innerHTML = kitchenDegree + '°C';
//                 localStorage.setItem('kitchenDegree', kitchenDegree);
//             }
//             else {
//                 kitchenDegree = 30;
//                 document.getElementById("degree").innerHTML = kitchenDegree + '°C';
//                 localStorage.setItem('kitchenDegree', kitchenDegree);
//             }
//         }
//     }
//     if (livingDegreeB == 1) {
//         if (current == "living") {
//             if (livingDegree < 30) {
//                 livingDegree++;
//                 document.getElementById("degree").innerHTML = livingDegree + '°C';
//                 localStorage.setItem('livingDegree', livingDegree);
//             }
//             else {
//                 livingDegree = 30;
//                 document.getElementById("degree").innerHTML = livingDegree + '°C';
//                 localStorage.setItem('livingDegree', livingDegree);
//             }

//         }
//     }
//     if (bedroomDegreeB == 1) {
//         if (current == "bedroom") {
//             if (bedroomDegree < 30) {
//                 bedroomDegree++;
//                 document.getElementById("degree").innerHTML = bedroomDegree + '°C';
//                 localStorage.setItem('bedroomDegree', bedroomDegree);
//             }
//             else {
//                 bedroomDegree = 30;
//                 document.getElementById("degree").innerHTML = bedroomDegree + '°C';
//                 localStorage.setItem('bedroomDegree', bedroomDegree);
//             }
//         }
//     }
//     getCurrent();
// });


// document.getElementById('cold').addEventListener('click', function () {
//     if (kitchenDegreeB == 1) {
//         if (current == "kitchen") {
//             if (kitchenDegree > 17) {
//                 kitchenDegree--;
//                 document.getElementById("degree").innerHTML = kitchenDegree + '°C';
//                 localStorage.setItem('kitchenDegree', kitchenDegree);
//             }
//             else {
//                 kitchenDegree = 17;
//                 document.getElementById("degree").innerHTML = kitchenDegree + '°C';
//                 localStorage.setItem('kitchenDegree', kitchenDegree);
//             }
//         }
//     }
//     if (livingDegreeB == 1) {
//         if (current == "living") {
//             if (livingDegree > 17) {
//                 livingDegree--;
//                 document.getElementById("degree").innerHTML = livingDegree + '°C';
//                 localStorage.setItem('livingDegree', livingDegree);
//             }
//             else {
//                 livingDegree = 17;
//                 document.getElementById("degree").innerHTML = livingDegree + '°C';
//                 localStorage.setItem('livingDegree', livingDegree);
//             }
//         }
//     }
//     if (bedroomDegreeB == 1) {
//         if (current == "bedroom") {
//             if (bedroomDegree > 17) {
//                 bedroomDegree--;
//                 document.getElementById("degree").innerHTML = bedroomDegree + '°C';
//                 localStorage.setItem('bedroomDegree', bedroomDegree);
//             }
//             else {
//                 bedroomDegree = 17;
//                 document.getElementById("degree").innerHTML = bedroomDegree + '°C';
//                 localStorage.setItem('bedroomDegree', bedroomDegree);

//             }
//         }
//     }
//     getCurrent();
// });

// function getCurrent() {
//     if (current == "kitchen") {
//         document.getElementById("degree").innerHTML = kitchenDegree + '°C';
//         savedWifiValue = kitchenWifi;
//         savedLightValue = kitchenLight;

//     }
//     else if (current == "living") {
//         document.getElementById("degree").innerHTML = livingDegree + '°C';
//         savedWifiValue = livingWifi;
//         savedLightValue = livingLight;

//     }
//     else if (current == "bedroom") {
//         document.getElementById("degree").innerHTML = bedroomDegree + '°C';
//         savedWifiValue = bedroomWifi;
//         savedLightValue = bedroomLight;


//     }
//     else {
//         document.getElementById("degree").innerHTML = kitchenDegree + '°C';
//         savedWifiValue = kitchenWifi;
//         savedLightValue = kitchenLight;


//     }


//     const wifiCheckbox = document.querySelector('#router input[type="checkbox"]');
//     const airCheckbox = document.querySelector('#air input[type="checkbox"]');
//     const lightCheckbox = document.querySelector('#light input[type="checkbox"]');

//     // wifiCheckbox.addEventListener('change', function () {
//     //     localStorage.setItem('wifi', this.checked);
//     // });

//     // wifiCheckbox.addEventListener('change', function () {

//     //     if (current == "kitchen") {
//     //         kitchenWifi = this.checked;
//     //         localStorage.setItem('kitchenWifi', kitchenWifi);
//     //     }
//     //     else if (current == "living") {
//     //         livingWifi = this.checked;
//     //         localStorage.setItem('livingWifi', livingWifi);
//     //     }
//     //     else if (current == "bedroom") {
//     //         bedroomWifi = this.checked;
//     //         localStorage.setItem('bedroomWifi', bedroomWifi);
//     //     }
//     // });





//     if (savedWifiValue !== 0) {
//         wifiCheckbox.checked = savedWifiValue === 1;
//     }
//     else {
//         savedWifiValue = 0;
//     }



//     if (savedLightValue !== 0) {
//         lightCheckbox.checked = savedLightValue === 1;
//     }
//     else {
//         savedLightValue = 0;
//     }

//     lightCheckbox.addEventListener('change', function () {
//         if (current == "kitchen") {
//             kitchenLight = this.checked;
//             localStorage.setItem('kitchenLight', kitchenLight);
//         }
//         else if (current == "living") {
//             livingLight = this.checked;
//             localStorage.setItem('livingLight', livingLight);
//         }
//         else if (current == "bedroom") {
//             bedroomLight = this.checked;
//             localStorage.setItem('bedroomLight', bedroomLight);
//         }
//     });
//     wifiCheckbox.addEventListener('change', function () {
//         if (current == "kitchen") {
//             kitchenWifi = this.checked;
//             localStorage.setItem('kitchenWifi', kitchenWifi);
//         }
//         else if (current == "living") {
//             livingWifi = this.checked;
//             localStorage.setItem('livingWifi', livingWifi);
//         }
//         else if (current == "bedroom") {
//             bedroomWifi = this.checked;
//             localStorage.setItem('bedroomWifi', bedroomWifi);
//         }
//     });
//     airCheckbox.addEventListener('change', function () {
//         if (current == "kitchen") {
//             kitchenDegreeB = this.checked;
//             localStorage.setItem('kitchenDegreeB', kitchenDegreeB);
//         }
//         else if (current == "living") {
//             livingDegreeB = this.checked;
//             localStorage.setItem('livingDegreeB', livingDegreeB);
//         }
//         else if (current == "bedroom") {
//             bedroomDegreeB = this.checked;
//             localStorage.setItem('bedroomDegreeB', bedroomDegreeB);
//         }
//     });
// }
// // lightCheckbox.addEventListener('change', function () {
// //     localStorage.setItem('livingLight', this.checked);
// //     if (savedWifiValue !== 0) {
// //         wifiCheckbox.checked = savedWifiValue === 1;
// //     }
// //     else {
// //         savedWifiValue = 0;
// //     }
// //     if (savedLightValue !== 0) {
// //         lightCheckbox.checked = savedLightValue === 1;
// //     }
// //     else {
// //         savedLightValue = 0;
// //     }
// // });

new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    lineColors: ['#00A36C'],
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
        { label: "Samsung TV", value: 42 },
        { label: "Washing machine", value: 28 },
        { label: "iMac", value: 21 },
        { label: "iphone 13", value: 6 },
        { label: "Fridge", value: 22 }
    ],
    labelColor: '#ffffff',
    colors: ['#00A36C', '#274C77', 'orange', '#274C77', '#E6E6FA']
});


let kitchenDegree = parseInt(localStorage.getItem('kitchenDegree')) || 17;
let livingDegree = parseInt(localStorage.getItem('livingDegree')) || 17;
let bedroomDegree = parseInt(localStorage.getItem('bedroomDegree')) || 17;
let lobbyDegree = parseInt(localStorage.getItem('lobbyDegree')) || 17;

let kitchenDegreeB = parseInt(localStorage.getItem('kitchenDegreeB')) || 0;
let livingDegreeB = parseInt(localStorage.getItem('livingDegreeB')) || 0;
let bedroomDegreeB = parseInt(localStorage.getItem('bedroomDegreeB')) || 0;
let lobbyDegreeB = parseInt(localStorage.getItem('homeDegreeB')) || 0;

let kitchenWifi = parseInt(localStorage.getItem('kitchenWifi')) || 0;
let livingWifi = parseInt(localStorage.getItem('livingWifi')) || 0;
let bedroomWifi = parseInt(localStorage.getItem('bedroomWifi')) || 0;
let lobbyWifi = parseInt(localStorage.getItem('homeWifi')) || 0;

let kitchenLight = parseInt(localStorage.getItem('kitchenLight')) || 0;
let livingLight = parseInt(localStorage.getItem('livingLight')) || 0;
let bedroomLight = parseInt(localStorage.getItem('bedroomLight')) || 0;
let lobbyLight = parseInt(localStorage.getItem('homeLight')) || 0;


let lobbyDegreeElement = document.getElementById('LobbyDegree');
let lobbyColdButton = document.getElementById('lobbyCold');
let lobbyHotButton = document.getElementById('lobbyHot');

let kitchenDegreeElement = document.getElementById('KitchenDegree');
let kitchenColdButton = document.getElementById('kitchenCold');
let kitchenHotButton = document.getElementById('kitchenHot');

let livingDegreeElement = document.getElementById('LivingDegree');
let livingColdButton = document.getElementById('livingCold');
let livingHotButton = document.getElementById('livingHot');

let bedroomDegreeElement = document.getElementById('BedroomDegree');
let bedroomColdButton = document.getElementById('bedroomCold');
let bedroomHotButton = document.getElementById('bedroomHot');



function updateLobbyTemperature() {
    lobbyDegreeElement.textContent = homeDegree;
    localStorage.setItem('homeDegree', homeDegree);
}

function updateKitchenTemperature() {
    kitchenDegreeElement.textContent = kitchenDegree;
}

function updateLivingTemperature() {
    livingDegreeElement.textContent = livingDegree;
}

function updateBedroomTemperature() {
    bedroomDegreeElement.textContent = bedroomDegree;
}

lobbyColdButton.addEventListener('click', function () {
    if (lobbyDegreeB == 1) {
        if (lobbyDegree > 17) {
            lobbyDegree -= 1;
            updateLobbyTemperature();
        }
    }
});

lobbyHotButton.addEventListener('click', function () {
    if (lobbyDegreeB == 1) {
        if (lobbyDegree < 30) {
            lobbyDegree += 1;
            updateLobbyTemperature();
        }
    }
});

kitchenColdButton.addEventListener('click', function () {
    if (kitchenDegreeB == 1) {
        if (kitchenDegree > 17) {
            kitchenDegree -= 1;
            updateKitchenTemperature();
        }
    }
});

kitchenHotButton.addEventListener('click', function () {
    if (kitchenDegreeB == 1) {
        if (kitchenDegree < 30) {
            kitchenDegree += 1;
            updateKitchenTemperature();
        }
    }
});

livingColdButton.addEventListener('click', function () {
    if (livingDegreeB == 1) {
        if (livingDegree > 17) {
            livingDegree -= 1;
            updateLivingTemperature();
        }
    }
});

livingHotButton.addEventListener('click', function () {
    if (livingDegreeB == 1) {
        if (livingDegree < 30) {
            livingDegree += 1;
            updateLivingTemperature();
        }
    }
});

bedroomColdButton.addEventListener('click', function () {
    if (bedroomDegreeB == 1) {
        if (bedroomDegree > 17) {
            bedroomDegree -= 1;
            updateBedroomTemperature();
        }
    }
});

bedroomHotButton.addEventListener('click', function () {
    if (bedroomDegreeB == 1) {
        if (bedroomDegree < 30) {
            bedroomDegree += 1;
            updateBedroomTemperature();
        }
    }
});

let lobbyAirCheckbox = document.getElementById('lobbyAirCheckbox');

lobbyAirCheckbox.addEventListener('change', function () {
    lobbyDegreeB = lobbyAirCheckbox.checked ? 1 : 0;
    updateLobbyTemperature();
});




console.log(lobbyDegreeB);


