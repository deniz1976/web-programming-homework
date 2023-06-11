let authorizated = localStorage.getItem("user");
if (authorizated == "false" || authorizated == null) {
    window.location.href = "login.php";
}

else if (authorizated == "true") {

    let page = localStorage.getItem("page");

    let kitchenDegree = parseInt(localStorage.getItem('kitchenDegree')) || 17;
    let livingDegree = parseInt(localStorage.getItem('livingDegree')) || 17;
    let bedroomDegree = parseInt(localStorage.getItem('bedroomDegree')) || 17;
    let lobbyDegree = parseInt(localStorage.getItem('lobbyDegree')) || 17;

    let kitchenDegreeB = parseInt(localStorage.getItem('kitchenDegreeB')) || 0;
    let livingDegreeB = parseInt(localStorage.getItem('livingDegreeB')) || 0;
    let bedroomDegreeB = parseInt(localStorage.getItem('bedroomDegreeB')) || 0;
    let lobbyDegreeB = parseInt(localStorage.getItem('lobbyDegreeB')) || 0;
    let bedroomSpeakerB = parseInt(localStorage.getItem('bedroomSpeakerB')) || 0;

    let kitchenWifi = parseInt(localStorage.getItem('kitchenWifi')) || 0;
    let livingWifi = parseInt(localStorage.getItem('livingWifi')) || 0;
    let bedroomWifi = parseInt(localStorage.getItem('bedroomWifi')) || 0;
    let lobbyWifi = parseInt(localStorage.getItem('lobbyWifi')) || 0;

    let kitchenLight = parseInt(localStorage.getItem('kitchenLight')) || 0;
    let livingLight = parseInt(localStorage.getItem('livingLight')) || 0;
    let bedroomLight = parseInt(localStorage.getItem('bedroomLight')) || 0;
    let lobbyLight = parseInt(localStorage.getItem('lobbyLight')) || 0;

    let bedroomSpeaker = parseInt(localStorage.getItem('bedroomSpeaker')) || 0;



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
        lobbyDegreeElement.textContent = lobbyDegree;
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

    if (page == "2" || page == "6") {
        let livingDegreeElement = document.getElementById('livingDegree');
        if (page == "2") {
            let livingColdButton = document.getElementById('livingCold');
            let livingHotButton = document.getElementById('livingHot');
            let livingAirCheckbox = document.getElementById('livingAirCheckbox');
            let livingRouterCheckbox = document.getElementById('livingRouterCheckbox');
            let livingLightCheckbox = document.getElementById('livingLightCheckbox');
            let livingDoorCheckbox = document.getElementById('livingDoorCheckbox');
            let livingCurtainCheckbox = document.getElementById('livingCurtainCheckbox');
            let livingTVCheckbox = document.getElementById('livingTVCheckbox');

            livingAirCheckbox.addEventListener('change', function () {
                livingAirBoolean = livingAirCheckbox.checked ? 1 : 0;
                localStorage.setItem('livingDegreeB', livingAirBoolean);
            });

            livingLightCheckbox.addEventListener('change', function () {
                livingLightBoolean = livingLightCheckbox.checked ? 1 : 0;
                localStorage.setItem('livingLight', livingLightBoolean);
            });

            livingRouterCheckbox.addEventListener('change', function () {
                livingWifiBoolean = livingRouterCheckbox.checked ? 1 : 0;
                localStorage.setItem('livingWifi', livingWifiBoolean);
            });

            livingDoorCheckbox.addEventListener('change', function () {
                livingDoorBoolean = livingDoorCheckbox.checked ? 1 : 0;
                localStorage.setItem('livingDoor', livingDoorBoolean);
            });

            livingCurtainCheckbox.addEventListener('change', function () {
                livingCurtainBoolean = livingCurtainCheckbox.checked ? 1 : 0;
                localStorage.setItem('livingCurtain', livingCurtainBoolean);
            });

            livingTVCheckbox.addEventListener('change', function () {
                livingTVBoolean = livingTVCheckbox.checked ? 1 : 0;
                localStorage.setItem('livingTV', livingTVBoolean);
            });

            livingCold.addEventListener('click', function () {
                if (localStorage.getItem("livingDegreeB") == 1) {
                    if (livingDegree > 17) {
                        livingDegree -= 1;
                        document.getElementById("livingDegree").innerHTML = livingDegree + "°C";
                        localStorage.setItem("livingDegree", livingDegree);
                    }
                }
            });

            livingHot.addEventListener('click', function () {
                if (localStorage.getItem("livingDegreeB") == 1) {
                    if (livingDegree < 30) {
                        livingDegree += 1;
                        document.getElementById("livingDegree").innerHTML = livingDegree + "°C";
                        localStorage.setItem("livingDegree", livingDegree);
                    }
                }
            });
        }
    }

    if (page == "3" || page == "7") {
        let bedroomDegreeElement = document.getElementById('bedroomDegree');
        if (page == "3") {
            let bedroomColdButton = document.getElementById('bedroomCold');
            let bedroomHotButton = document.getElementById('bedroomHot');
            let bedroomAirCheckbox = document.getElementById('bedroomAirCheckbox');
            let bedroomRouterCheckbox = document.getElementById('bedroomRouterCheckbox');
            let bedroomLightCheckbox = document.getElementById('bedroomLightCheckbox');
            let bedroomDoorCheckbox = document.getElementById('bedroomDoorCheckbox');
            let bedroomCurtainCheckbox = document.getElementById('bedroomCurtainCheckbox');
            let bedroomSpeakerCheckbox = document.getElementById('bedroomSpeakerCheckbox');

            bedroomAirCheckbox.addEventListener('change', function () {
                bedroomAirBoolean = bedroomAirCheckbox.checked ? 1 : 0;
                localStorage.setItem('bedroomDegreeB', bedroomAirBoolean);
            });

            bedroomLightCheckbox.addEventListener('change', function () {
                bedroomLightBoolean = bedroomLightCheckbox.checked ? 1 : 0;
                localStorage.setItem('bedroomLight', bedroomLightBoolean);
            });

            bedroomRouterCheckbox.addEventListener('change', function () {
                bedroomWifiBoolean = bedroomRouterCheckbox.checked ? 1 : 0;
                localStorage.setItem('bedroomWifi', bedroomWifiBoolean);
            });

            bedroomDoorCheckbox.addEventListener('change', function () {
                bedroomDoorBoolean = bedroomDoorCheckbox.checked ? 1 : 0;
                localStorage.setItem('bedroomDoor', bedroomDoorBoolean);
            });

            bedroomCurtainCheckbox.addEventListener('change', function () {
                bedroomCurtainBoolean = bedroomCurtainCheckbox.checked ? 1 : 0;
                localStorage.setItem('bedroomCurtain', bedroomCurtainBoolean);
            });

            bedroomSpeakerCheckbox.addEventListener('change', function () {
                bedroomSpeakerBoolean = bedroomSpeakerCheckbox.checked ? 1 : 0;
                localStorage.setItem('bedroomSpeakerB', bedroomSpeakerBoolean);
            });

            bedroomDown.addEventListener('click', function () {
                if (localStorage.getItem("bedroomSpeakerB") == 1) {
                    if (bedroomSpeaker > 0) {
                        bedroomSpeaker -= 5;
                        document.getElementById("bedroomSpeaker").innerHTML = bedroomSpeaker + "%";
                        localStorage.setItem("bedroomSpeaker", bedroomSpeaker);
                    }
                }
            });

            bedroomUp.addEventListener('click', function () {
                if (localStorage.getItem("bedroomSpeakerB") == 1) {
                    if (bedroomSpeaker < 100) {
                        bedroomSpeaker += 5;
                        document.getElementById("bedroomSpeaker").innerHTML = bedroomSpeaker + "%";
                        localStorage.setItem("bedroomSpeaker", bedroomSpeaker);
                    }
                }
            });

            bedroomCold.addEventListener('click', function () {
                if (localStorage.getItem("bedroomDegreeB") == 1) {
                    if (bedroomDegree > 17) {
                        bedroomDegree -= 1;
                        document.getElementById("bedroomDegree").innerHTML = bedroomDegree + "°C";
                        localStorage.setItem("bedroomDegree", bedroomDegree);
                    }
                }
            });

            bedroomHot.addEventListener('click', function () {
                if (localStorage.getItem("bedroomDegreeB") == 1) {
                    if (bedroomDegree < 30) {
                        bedroomDegree += 1;
                        document.getElementById("bedroomDegree").innerHTML = bedroomDegree + "°C";
                        localStorage.setItem("bedroomDegree", bedroomDegree);
                    }
                }
            });


        }
    }

}






