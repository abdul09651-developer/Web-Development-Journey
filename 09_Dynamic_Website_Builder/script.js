console.log("Script Js is initializing!")



function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let box = document.createElement("div");
    box.className = "box";

    box.innerHTML = `
        <div class="img">
            <img src="${thumbnail}">
            <div class="duration">${duration}</div>
        </div>

        <div class="box0">
            <span class="title">${title}</span>
            <div class="otherdetails">
                ${cName} • ${views >= 1000000 ? views/1000000+"M" : views/1000+"K"} views • ${monthsOld}
            </div>
        </div>
    `;

    document.querySelector(".container").append(box);
}

createCard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course -Tutorial #73", "CodeWithHarry", 1600000, "2 years ago", "3:26", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBy-oj2TIS9wHcc1zCvAkY4TfKkWA");

createCard("Events, Event Bubbling, setInterval & setTimeout | Sigma Web Development Course - Tutorial #74", "CodeWithHarry", 6600000, "2 years ago", "27:22", "https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAbDeaG5nlgOfmj0aGOejvuL6680Q");

createCard("JavaScript Callbacks & Promises | Sigma Web Development Course - Tutorial #75", "CodeWithHarry", 5600000, "2 years ago", "11:27", "https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDo9qzj8xbjsGC0W8vHOY6xEeQOUA");

createCard("Async/Await & Fetch API in JavaScript with Examples | Sigma Web Development Course - Tutorial #76", "CodeWithHarry", 4600000, "2 years ago", "31:22", "https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLArjDDyBrbZFneeKtbmzY1ZaVtt6g");
