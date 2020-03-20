
function fetchCatalog() {
    console.log("Fetching catalog");
    $.ajax({
        type: 'GET',
        url: '/Catalog/GetCatalog',
        success: function (res) {
            console.log("From server", res);

            //TODO: Sort the cars (res Array) to be Cheapest first
            var sortedList = res.sort((left, right) => left.dailyPrice - right.dailyPrice);


            for (var i = 0; i < sortedList.length; i++) {
                displayCar(sortedList[i]);
            }
        },

        error: function (details) {
            console.log("Error:", details);
        }

    })
}


function displayCar(car) {
    var template =

        `<div class ="col-5 item">
            <div class="row">
            
            <div class="col-7">
            <img src='${car.imageUrl}'>
            </div>
            <div class="col-5">
            <label class="info-title">Year:</label>
            <label class="info-value">${car.year}</label>
            <br>
            
            
            <label class="info-title">Make:</label>
            <label class="info-value">${car.make}</label>
            
            <br>
            
            <label class="info-title">Model:</label>
            <label class="info-value">${car.model}</label>
            <br>
        
            
            <label class="info-title">Price:</label>
            <label class="info-value">${car.dailyPrice}</label>
            </div>
            
            
            <div>
                <label class="car-desc">${car.description}</label>
            </div>
            <div>
            <button class="btn-outline-primary button">Rent Now</button>
            </div>
        </div>
    </div>`;

    var container = $("#catalog");
    container.append(template);

}


function init() {
    console.log("Catalog page!");

    fetchCatalog();
}

window.onload = init;


