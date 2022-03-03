var h = document.createElement("h1");
h.setAttribute("id", "title");
h.classList.add("text-center");
h.innerText = "RESTCOUNTRIES & WEATHER";
document.body.append(h);

var div1 = document.createElement("div");
div1.classList.add("container");
document.body.appendChild(div1);

var row = document.createElement("div");
row.classList.add("row");
// row.innerText="hello"
div1.appendChild(row);

fetch("https://restcountries.com/v3.1/all")
  .then((d) => d.json())
  .then((data) => {
    console.log(data);
    console.log(data.length);
    console.log(data[2].flag);
    for (let i = 0; i < data.length; i++) {
      //console.log(data[i])
      // a=data[i].capital
      row.innerHTML += `  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2">
            <div class="card h-100 ">
           <div class="card-header text-center"> ${data[i].capital}<div>
           <img src=${data[i].flags.png} class="card-img-top"> 
           <div class=" card-body ">
            <div class = " card-text " >Native Name:${data[i].nativeName} <br> Region:${data[i].region} <BR>Population:${data[i].population} </div>
            
            <button onclick='check("${data[i].capital}","ans${i}")'">Click for weather</button>
            <div id="ans${i}"></div>
            </div>
            </div>
            </div>`;
    }
  })
  .catch((er) => {
    console.log("error");
  });

function check(a, i) {
  console.log(i);
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      a +
      "&appid=46b7aa41bbc315e0b4b9b9161e920dc2"
  )
    .then((b) => b.json())
    .then((bdata) => {
      var e = bdata.weather[0].description;
      console.log(e);
      document.getElementById(i).innerHTML = e;
    });
}
