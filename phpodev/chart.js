

// // // new Morris.Line({
// // //     // ID of the element in which to draw the chart.
// // //     element: 'myfirstchart',
// // //     // Chart data records -- each entry in this array corresponds to a point on
// // //     // the chart.
// // //     lineColors: ['#00A36C'],
// // //     data: [
// // //         { year: '2019', value: 1.576 },
// // //         { year: '2020', value: 1.500 },
// // //         { year: '2021', value: 2.000 },
// // //         { year: '2022', value: 1.500 },
// // //         { year: '2023', value: 0.350 }

// // //     ],
// // //     // The name of the data record attribute that contains x-values.
// // //     xkey: 'year',
// // //     // A list of names of data record attributes that contain y-values.
// // //     ykeys: ['value'],
// // //     // Labels for the ykeys -- will be displayed when you hover over the
// // //     // chart.
// // //     labels: ['Value']
// // // });
// // // Morris.Donut({
// // //     element: 'donut-example',
// // //     data: [
// // //         { label: "Samsung TV", value: 42 },
// // //         { label: "Washing machine", value: 28 },
// // //         { label: "iMac", value: 21 },
// // //         { label: "iphone 13", value: 6 },
// // //         { label: "Fridge", value: 22 }
// // //     ],
// // //     labelColor: '#ffffff',
// // //     colors: ['#00A36C', '#274C77', 'orange', '#274C77', '#E6E6FA']
// // // });

// // // // function getRandomInt(max) {
// // // //     return Math.floor(Math.random() * max);
// // // // }

// // // //degree part
// // // let kitchenDegree = parseInt(localStorage.getItem('kitchenDegree')) || 17;
// // // let livingDegree = parseInt(localStorage.getItem('livingDegree')) || 17;
// // // let bedroomDegree = parseInt(localStorage.getItem('bedroomDegree')) || 17;
// // // let kitchenDegreeB = parseInt(localStorage.getItem('kitchenDegreeB')) || 0;
// // // let livingDegreeB = parseInt(localStorage.getItem('livingDegreeB')) || 0;
// // // let bedroomDegreeB = parseInt(localStorage.getItem('bedroomDegreeB')) || 0;
// // // let kitchenWifi = parseInt(localStorage.getItem('kitchenWifi')) || 0;
// // // let livingWifi = parseInt(localStorage.getItem('livingWifi')) || 0;
// // // let bedroomWifi = parseInt(localStorage.getItem('bedroomWifi')) || 0;
// // // let kitchenLight = parseInt(localStorage.getItem('kitchenLight')) || 0;
// // // let livingLight = parseInt(localStorage.getItem('livingLight')) || 0;
// // // let bedroomLight = parseInt(localStorage.getItem('bedroomLight')) || 0;
// // // let savedLightValue;
// // // let savedWifiValue;
// // // let current = "kitchen";
// // // localStorage.setItem("current", current);

// // // getCurrent();



// // // document.getElementById('hot').addEventListener('click', function () {
// // //     if (kitchenDegreeB == 1) {
// // //         if (current == "kitchen") {
// // //             if (kitchenDegree < 30) {
// // //                 kitchenDegree++;
// // //                 document.getElementById("degree").innerHTML = kitchenDegree + '°C';
// // //                 localStorage.setItem('kitchenDegree', kitchenDegree);
// // //             }
// // //             else {
// // //                 kitchenDegree = 30;
// // //                 document.getElementById("degree").innerHTML = kitchenDegree + '°C';
// // //                 localStorage.setItem('kitchenDegree', kitchenDegree);
// // //             }
// // //         }
// // //     }
// // //     if (livingDegreeB == 1) {
// // //         if (current == "living") {
// // //             if (livingDegree < 30) {
// // //                 livingDegree++;
// // //                 document.getElementById("degree").innerHTML = livingDegree + '°C';
// // //                 localStorage.setItem('livingDegree', livingDegree);
// // //             }
// // //             else {
// // //                 livingDegree = 30;
// // //                 document.getElementById("degree").innerHTML = livingDegree + '°C';
// // //                 localStorage.setItem('livingDegree', livingDegree);
// // //             }

// // //         }
// // //     }
// // //     if (bedroomDegreeB == 1) {
// // //         if (current == "bedroom") {
// // //             if (bedroomDegree < 30) {
// // //                 bedroomDegree++;
// // //                 document.getElementById("degree").innerHTML = bedroomDegree + '°C';
// // //                 localStorage.setItem('bedroomDegree', bedroomDegree);
// // //             }
// // //             else {
// // //                 bedroomDegree = 30;
// // //                 document.getElementById("degree").innerHTML = bedroomDegree + '°C';
// // //                 localStorage.setItem('bedroomDegree', bedroomDegree);
// // //             }
// // //         }
// // //     }
// // //     getCurrent();
// // // });


// // // document.getElementById('cold').addEventListener('click', function () {
// // //     if (kitchenDegreeB == 1) {
// // //         if (current == "kitchen") {
// // //             if (kitchenDegree > 17) {
// // //                 kitchenDegree--;
// // //                 document.getElementById("degree").innerHTML = kitchenDegree + '°C';
// // //                 localStorage.setItem('kitchenDegree', kitchenDegree);
// // //             }
// // //             else {
// // //                 kitchenDegree = 17;
// // //                 document.getElementById("degree").innerHTML = kitchenDegree + '°C';
// // //                 localStorage.setItem('kitchenDegree', kitchenDegree);
// // //             }
// // //         }
// // //     }
// // //     if (livingDegreeB == 1) {
// // //         if (current == "living") {
// // //             if (livingDegree > 17) {
// // //                 livingDegree--;
// // //                 document.getElementById("degree").innerHTML = livingDegree + '°C';
// // //                 localStorage.setItem('livingDegree', livingDegree);
// // //             }
// // //             else {
// // //                 livingDegree = 17;
// // //                 document.getElementById("degree").innerHTML = livingDegree + '°C';
// // //                 localStorage.setItem('livingDegree', livingDegree);
// // //             }
// // //         }
// // //     }
// // //     if (bedroomDegreeB == 1) {
// // //         if (current == "bedroom") {
// // //             if (bedroomDegree > 17) {
// // //                 bedroomDegree--;
// // //                 document.getElementById("degree").innerHTML = bedroomDegree + '°C';
// // //                 localStorage.setItem('bedroomDegree', bedroomDegree);
// // //             }
// // //             else {
// // //                 bedroomDegree = 17;
// // //                 document.getElementById("degree").innerHTML = bedroomDegree + '°C';
// // //                 localStorage.setItem('bedroomDegree', bedroomDegree);

// // //             }
// // //         }
// // //     }
// // //     getCurrent();
// // // });

// // // function getCurrent() {
// // //     if (current == "kitchen") {
// // //         document.getElementById("degree").innerHTML = kitchenDegree + '°C';
// // //         savedWifiValue = kitchenWifi;
// // //         savedLightValue = kitchenLight;

// // //     }
// // //     else if (current == "living") {
// // //         document.getElementById("degree").innerHTML = livingDegree + '°C';
// // //         savedWifiValue = livingWifi;
// // //         savedLightValue = livingLight;

// // //     }
// // //     else if (current == "bedroom") {
// // //         document.getElementById("degree").innerHTML = bedroomDegree + '°C';
// // //         savedWifiValue = bedroomWifi;
// // //         savedLightValue = bedroomLight;


// // //     }
// // //     else {
// // //         document.getElementById("degree").innerHTML = kitchenDegree + '°C';
// // //         savedWifiValue = kitchenWifi;
// // //         savedLightValue = kitchenLight;


// // //     }


// // //     const wifiCheckbox = document.querySelector('#router input[type="checkbox"]');
// // //     const airCheckbox = document.querySelector('#air input[type="checkbox"]');
// // //     const lightCheckbox = document.querySelector('#light input[type="checkbox"]');

// // //     // wifiCheckbox.addEventListener('change', function () {
// // //     //     localStorage.setItem('wifi', this.checked);
// // //     // });

// // //     // wifiCheckbox.addEventListener('change', function () {

// // //     //     if (current == "kitchen") {
// // //     //         kitchenWifi = this.checked;
// // //     //         localStorage.setItem('kitchenWifi', kitchenWifi);
// // //     //     }
// // //     //     else if (current == "living") {
// // //     //         livingWifi = this.checked;
// // //     //         localStorage.setItem('livingWifi', livingWifi);
// // //     //     }
// // //     //     else if (current == "bedroom") {
// // //     //         bedroomWifi = this.checked;
// // //     //         localStorage.setItem('bedroomWifi', bedroomWifi);
// // //     //     }
// // //     // });





// // //     if (savedWifiValue !== 0) {
// // //         wifiCheckbox.checked = savedWifiValue === 1;
// // //     }
// // //     else {
// // //         savedWifiValue = 0;
// // //     }



// // //     if (savedLightValue !== 0) {
// // //         lightCheckbox.checked = savedLightValue === 1;
// // //     }
// // //     else {
// // //         savedLightValue = 0;
// // //     }

// // //     lightCheckbox.addEventListener('change', function () {
// // //         if (current == "kitchen") {
// // //             kitchenLight = this.checked;
// // //             localStorage.setItem('kitchenLight', kitchenLight);
// // //         }
// // //         else if (current == "living") {
// // //             livingLight = this.checked;
// // //             localStorage.setItem('livingLight', livingLight);
// // //         }
// // //         else if (current == "bedroom") {
// // //             bedroomLight = this.checked;
// // //             localStorage.setItem('bedroomLight', bedroomLight);
// // //         }
// // //     });
// // //     wifiCheckbox.addEventListener('change', function () {
// // //         if (current == "kitchen") {
// // //             kitchenWifi = this.checked;
// // //             localStorage.setItem('kitchenWifi', kitchenWifi);
// // //         }
// // //         else if (current == "living") {
// // //             livingWifi = this.checked;
// // //             localStorage.setItem('livingWifi', livingWifi);
// // //         }
// // //         else if (current == "bedroom") {
// // //             bedroomWifi = this.checked;
// // //             localStorage.setItem('bedroomWifi', bedroomWifi);
// // //         }
// // //     });
// // //     airCheckbox.addEventListener('change', function () {
// // //         if (current == "kitchen") {
// // //             kitchenDegreeB = this.checked;
// // //             localStorage.setItem('kitchenDegreeB', kitchenDegreeB);
// // //         }
// // //         else if (current == "living") {
// // //             livingDegreeB = this.checked;
// // //             localStorage.setItem('livingDegreeB', livingDegreeB);
// // //         }
// // //         else if (current == "bedroom") {
// // //             bedroomDegreeB = this.checked;
// // //             localStorage.setItem('bedroomDegreeB', bedroomDegreeB);
// // //         }
// // //     });
// // // }
// // // // lightCheckbox.addEventListener('change', function () {
// // // //     localStorage.setItem('livingLight', this.checked);
// // // //     if (savedWifiValue !== 0) {
// // // //         wifiCheckbox.checked = savedWifiValue === 1;
// // // //     }
// // // //     else {
// // // //         savedWifiValue = 0;
// // // //     }
// // // //     if (savedLightValue !== 0) {
// // // //         lightCheckbox.checked = savedLightValue === 1;
// // // //     }
// // // //     else {
// // // //         savedLightValue = 0;
// // // //     }
// // // // });

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





// let kitchenDegree = parseInt(localStorage.getItem('kitchenDegree')) || 17;
// let livingDegree = parseInt(localStorage.getItem('livingDegree')) || 17;
// let bedroomDegree = parseInt(localStorage.getItem('bedroomDegree')) || 17;
// let lobbyDegree = parseInt(localStorage.getItem('lobbyDegree')) || 17;

// let kitchenDegreeB = parseInt(localStorage.getItem('kitchenDegreeB')) || 0;
// let livingDegreeB = parseInt(localStorage.getItem('livingDegreeB')) || 0;
// let bedroomDegreeB = parseInt(localStorage.getItem('bedroomDegreeB')) || 0;
// let lobbyDegreeB = parseInt(localStorage.getItem('lobbyDegreeB')) || 0;

// let kitchenWifi = parseInt(localStorage.getItem('kitchenWifi')) || 0;
// let livingWifi = parseInt(localStorage.getItem('livingWifi')) || 0;
// let bedroomWifi = parseInt(localStorage.getItem('bedroomWifi')) || 0;
// let lobbyWifi = parseInt(localStorage.getItem('lobbyWifi')) || 0;

// let kitchenLight = parseInt(localStorage.getItem('kitchenLight')) || 0;
// let livingLight = parseInt(localStorage.getItem('livingLight')) || 0;
// let bedroomLight = parseInt(localStorage.getItem('bedroomLight')) || 0;
// let lobbyLight = parseInt(localStorage.getItem('lobbyLight')) || 0;


// let lobbyDegreeElement = document.getElementById('LobbyDegree');
// let lobbyColdButton = document.getElementById('lobbyCold');
// let lobbyHotButton = document.getElementById('lobbyHot');

// let kitchenDegreeElement = document.getElementById('KitchenDegree');
// let kitchenColdButton = document.getElementById('kitchenCold');
// let kitchenHotButton = document.getElementById('kitchenHot');

// let livingDegreeElement = document.getElementById('LivingDegree');
// let livingColdButton = document.getElementById('livingCold');
// let livingHotButton = document.getElementById('livingHot');

// let bedroomDegreeElement = document.getElementById('BedroomDegree');
// let bedroomColdButton = document.getElementById('bedroomCold');
// let bedroomHotButton = document.getElementById('bedroomHot');

// localStorage.setItem("lobbyDegree", lobbyDegree);
// localStorage.setItem("kitchenDegree", kitchenDegree);
// localStorage.setItem("livingDegree", livingDegree);
// localStorage.setItem("bedroomDegree", bedroomDegree);
// localStorage.setItem("lobbyDegreeB", lobbyDegreeB);
// localStorage.setItem("kitchenDegreeB", kitchenDegreeB);
// localStorage.setItem("livingDegreeB", livingDegreeB);
// localStorage.setItem("bedroomDegreeB", bedroomDegreeB);
// localStorage.setItem("kitchenWifi", kitchenWifi);
// localStorage.setItem("livingWifi", livingWifi);
// localStorage.setItem("bedroomWifi", bedroomWifi);
// localStorage.setItem("lobbyWifi", lobbyWifi);
// localStorage.setItem("kitchenLight", kitchenLight);
// localStorage.setItem("livingLight", livingLight);
// localStorage.setItem("bedroomLight", bedroomLight);
// localStorage.setItem("lobbyLight", lobbyLight);




// function updateLobbyTemperature() {
//     lobbyDegreeElement.textContent = lobbyDegree;
//     localStorage.setItem('lobbyDegree', lobbyDegree);
// }

// function updateKitchenTemperature() {
//     kitchenDegreeElement.textContent = kitchenDegree;
// }

// function updateLivingTemperature() {
//     livingDegreeElement.textContent = livingDegree;
// }

// function updateBedroomTemperature() {
//     bedroomDegreeElement.textContent = bedroomDegree;
// }

// lobbyColdButton.addEventListener('click', function () {
//     if (lobbyDegreeB == 1) {
//         if (lobbyDegree > 17) {
//             lobbyDegree -= 1;
//             updateLobbyTemperature();
//         }
//     }
// });

// lobbyHotButton.addEventListener('click', function () {
//     if (lobbyDegreeB == 0) {
//         if (lobbyDegree < 30) {
//             lobbyDegree += 1;
//             updateLobbyTemperature();
//         }
//     }
// });

// kitchenColdButton.addEventListener('click', function () {
//     if (kitchenDegreeB == 1) {
//         if (kitchenDegree > 17) {
//             kitchenDegree -= 1;
//             updateKitchenTemperature();
//         }
//     }
// });

// kitchenHotButton.addEventListener('click', function () {
//     if (kitchenDegreeB == 1) {
//         if (kitchenDegree < 30) {
//             kitchenDegree += 1;
//             updateKitchenTemperature();
//         }
//     }
// });

// livingColdButton.addEventListener('click', function () {
//     if (livingDegreeB == 1) {
//         if (livingDegree > 17) {
//             livingDegree -= 1;
//             updateLivingTemperature();
//         }
//     }
// });

// livingHotButton.addEventListener('click', function () {
//     if (livingDegreeB == 1) {
//         if (livingDegree < 30) {
//             livingDegree += 1;
//             updateLivingTemperature();
//         }
//     }
// });

// bedroomColdButton.addEventListener('click', function () {
//     if (bedroomDegreeB == 1) {
//         if (bedroomDegree > 17) {
//             bedroomDegree -= 1;
//             updateBedroomTemperature();
//         }
//     }
// });

// bedroomHotButton.addEventListener('click', function () {
//     if (bedroomDegreeB == 1) {
//         if (bedroomDegree < 30) {
//             bedroomDegree += 1;
//             updateBedroomTemperature();
//         }
//     }
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Lobby Degree checkbox element
//     let lobbyAirCheckbox = document.getElementById('lobbyAirCheckbox');

//     // Set initial checkbox state based on the loaded value
//     lobbyAirCheckbox.checked = lobbyDegreeB === 1;

//     // Checkbox event listener
//     lobbyAirCheckbox.addEventListener('change', function () {
//         // Update the lobbyDegreeB value based on the checkbox state
//         lobbyDegreeB = lobbyAirCheckbox.checked ? 1 : 0;

//         // Save the updated value to localStorage
//         localStorage.setItem('lobbyDegreeB', lobbyDegreeB);
//     });
// });



let page = localStorage.getItem("page");

let kitchenDegree = parseInt(localStorage.getItem('kitchenDegree')) || 17;
let livingDegree = parseInt(localStorage.getItem('livingDegree')) || 17;
let bedroomDegree = parseInt(localStorage.getItem('bedroomDegree')) || 17;
let lobbyDegree = parseInt(localStorage.getItem('lobbyDegree')) || 17;

let kitchenDegreeB = parseInt(localStorage.getItem('kitchenDegreeB')) || 0;
let livingDegreeB = parseInt(localStorage.getItem('livingDegreeB')) || 0;
let bedroomDegreeB = parseInt(localStorage.getItem('bedroomDegreeB')) || 0;
let lobbyDegreeB = parseInt(localStorage.getItem('lobbyDegreeB')) || 0;

let kitchenWifi = parseInt(localStorage.getItem('kitchenWifi')) || 0;
let livingWifi = parseInt(localStorage.getItem('livingWifi')) || 0;
let bedroomWifi = parseInt(localStorage.getItem('bedroomWifi')) || 0;
let lobbyWifi = parseInt(localStorage.getItem('lobbyWifi')) || 0;

let kitchenLight = parseInt(localStorage.getItem('kitchenLight')) || 0;
let livingLight = parseInt(localStorage.getItem('livingLight')) || 0;
let bedroomLight = parseInt(localStorage.getItem('bedroomLight')) || 0;
let lobbyLight = parseInt(localStorage.getItem('lobbyLight')) || 0;


let livingDegreeElement = document.getElementById('LivingDegree');
let livingColdButton = document.getElementById('livingCold');
let livingHotButton = document.getElementById('livingHot');

let bedroomDegreeElement = document.getElementById('BedroomDegree');
let bedroomColdButton = document.getElementById('bedroomCold');
let bedroomHotButton = document.getElementById('bedroomHot');

localStorage.setItem("lobbyDegree", lobbyDegree);
localStorage.setItem("kitchenDegree", kitchenDegree);
localStorage.setItem("livingDegree", livingDegree);
localStorage.setItem("bedroomDegree", bedroomDegree);
localStorage.setItem("lobbyDegreeB", lobbyDegreeB);
localStorage.setItem("kitchenDegreeB", kitchenDegreeB);
localStorage.setItem("livingDegreeB", livingDegreeB);
localStorage.setItem("bedroomDegreeB", bedroomDegreeB);
localStorage.setItem("kitchenWifi", kitchenWifi);
localStorage.setItem("livingWifi", livingWifi);
localStorage.setItem("bedroomWifi", bedroomWifi);
localStorage.setItem("lobbyWifi", lobbyWifi);
localStorage.setItem("kitchenLight", kitchenLight);
localStorage.setItem("livingLight", livingLight);
localStorage.setItem("bedroomLight", bedroomLight);
localStorage.setItem("lobbyLight", lobbyLight);

function updateLobbyTemperature() {
    // lobbyDegreeElement.textContent = lobbyDegree;
    localStorage.setItem("lobbyDegree", lobbyDegree);
}

function updateKitchenTemperature() {
    kitchenDegreeElement.textContent = kitchenDegree;
    localStorage.setItem("kitchenDegree", kitchenDegree);
}

function updateLivingTemperature() {
    livingDegreeElement.textContent = livingDegree;
    localStorage.setItem("livingDegree", livingDegree);
}

function updateBedroomTemperature() {
    bedroomDegreeElement.textContent = bedroomDegree;
    localStorage.setItem("bedroomDegree", bedroomDegree);
}


let kitchenAirCheckbox = document.getElementById('kitchenAirCheckbox');
let livingAirCheckbox = document.getElementById('livingAirCheckbox');
let bedroomAirCheckbox = document.getElementById('bedroomAirCheckbox');


if (page == "0" || page == "4") {
    let lobbyDegreeElement = document.getElementById('LobbyDegree');
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
    if (page == "0") {

        let lobbyColdButton = document.getElementById('lobbyCold');
        let lobbyHotButton = document.getElementById('lobbyHot');

        let lobbyAirCheckbox = document.getElementById('lobbyAirCheckbox');
        let lobbyRouterCheckbox = document.getElementById('lobbyRouterCheckbox');
        let lobbyLightCheckbox = document.getElementById('lobbyLightCheckbox');

        lobbyAirCheckbox.addEventListener('change', function () {
            lobbyAirBoolean = lobbyAirCheckbox.checked ? 1 : 0;
            localStorage.setItem('lobbyDegreeB', lobbyAirBoolean);
        });

        lobbyLightCheckbox.addEventListener('change', function () {
            lobbyLightBoolean = lobbyLightCheckbox.checked ? 1 : 0;
            localStorage.setItem('lobbyLight', lobbyLightBoolean);
        });

        lobbyRouterCheckbox.addEventListener('change', function () {
            lobbyWifiBoolean = lobbyRouterCheckbox.checked ? 1 : 0;
            localStorage.setItem('lobbyWifi', lobbyWifiBoolean);
        });


        lobbyCold.addEventListener('click', function () {
            if (localStorage.getItem("lobbyDegreeB") == 1) {
                if (lobbyDegree > 17) {
                    lobbyDegree -= 1;
                    document.getElementById("lobbyDegree").innerHTML = lobbyDegree + "°C";
                    localStorage.setItem("lobbyDegree", lobbyDegree);
                }
            }
        });

        lobbyHot.addEventListener('click', function () {
            if (localStorage.getItem("lobbyDegreeB") == 1) {
                if (lobbyDegree < 30) {
                    lobbyDegree += 1;
                    document.getElementById("lobbyDegree").innerHTML = lobbyDegree + "°C";
                    localStorage.setItem("lobbyDegree", lobbyDegree);
                }
            }
        });
    }

}

if (page == "1" || page == "5") {
    let kitchenDegreeElement = document.getElementById('KitchenDegree');
    if (page == "1") {
        let kitchenColdButton = document.getElementById('kitchenCold');
        let kitchenHotButton = document.getElementById('kitchenHot');
        let kitchenAirCheckbox = document.getElementById('kitchenAirCheckbox');
        let kitchenRouterCheckbox = document.getElementById('kitchenRouterCheckbox');
        let kitchenLightCheckbox = document.getElementById('kitchenLightCheckbox');
        let kitchenDoorCheckbox = document.getElementById('kitchenDoorCheckbox');
        let kitchenCurtainCheckbox = document.getElementById('kitchenCurtainCheckbox');
        let kitchenBlenderCheckbox = document.getElementById('kitchenBlenderCheckbox');

        kitchenAirCheckbox.addEventListener('change', function () {
            kitchenAirBoolean = kitchenAirCheckbox.checked ? 1 : 0;
            localStorage.setItem('kitchenDegreeB', kitchenAirBoolean);
        });

        kitchenLightCheckbox.addEventListener('change', function () {
            kitchenLightBoolean = kitchenLightCheckbox.checked ? 1 : 0;
            localStorage.setItem('kitchenLight', kitchenLightBoolean);
        });

        kitchenRouterCheckbox.addEventListener('change', function () {
            kitchenWifiBoolean = kitchenRouterCheckbox.checked ? 1 : 0;
            localStorage.setItem('kitchenWifi', kitchenWifiBoolean);
        });

        kitchenDoorCheckbox.addEventListener('change', function () {
            kitchenDoorBoolean = kitchenDoorCheckbox.checked ? 1 : 0;
            localStorage.setItem('kitchenDoor', kitchenDoorBoolean);
        });

        kitchenCurtainCheckbox.addEventListener('change', function () {
            kitchenCurtainBoolean = kitchenCurtainCheckbox.checked ? 1 : 0;
            localStorage.setItem('kitchenCurtain', kitchenCurtainBoolean);
        });

        kitchenBlenderCheckbox.addEventListener('change', function () {
            kitchenBlenderBoolean = kitchenBlenderCheckbox.checked ? 1 : 0;
            localStorage.setItem('kitchenBlender', kitchenBlenderBoolean);
        });

        kitchenCold.addEventListener('click', function () {
            if (localStorage.getItem("kitchenDegreeB") == 1) {
                if (kitchenDegree > 17) {
                    kitchenDegree -= 1;
                    document.getElementById("kitchenDegree").innerHTML = kitchenDegree + "°C";
                    localStorage.setItem("kitchenDegree", kitchenDegree);
                }
            }
        });

        kitchenHot.addEventListener('click', function () {
            if (localStorage.getItem("kitchenDegreeB") == 1) {
                if (kitchenDegree < 30) {
                    kitchenDegree += 1;
                    document.getElementById("kitchenDegree").innerHTML = kitchenDegree + "°C";
                    localStorage.setItem("kitchenDegree", kitchenDegree);
                }
            }
        });



    }

}








// kitchenAirCheckbox.addEventListener('change', function () {
//     kitchenAirBoolean = kitchenAirCheckbox.checked ? 1 : 0;
//     localStorage.setItem('kitchenDegreeB', kitchenAirBoolean);
// });

// livingAirCheckbox.addEventListener('change', function () {
//     livingAirB = livingAirCheckbox.checked ? 1 : 0;
//     localStorage.setItem('livingDegreeB', livingAirB);
// });
// bedroomAirCheckbox.addEventListener('change', function () {
//     bedroomAirB = bedroomAirCheckbox.checked ? 1 : 0;
//     localStorage.setItem('bedroomDegreeB', bedroomAirB);
// });

// let lobbyLightCheckbox = document.getElementById('lobbyLightCheckbox');

// lobbyLightCheckbox.addEventListener('change', function () {
//     lobbyLightBoolean = lobbyLightCheckbox.checked ? 1 : 0;
//     localStorage.setItem('lobbyLight', lobbyLightBoolean);
// });





