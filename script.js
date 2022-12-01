script.js
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

//trendings

console.log("This is my index js file");

//let source = 'the-times-of-india';
let apiKey = '70f1bc68ba864890bdcdfde42de3a200'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
var xhr = new XMLHttpRequest();

xhr.open('GET', `https://gnews.io/api/v4/top-headlines?country=in&lang=en&token=0d26f3e3add0a936699c625c54c4a0e4`, true);
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=70f1bc68ba864890bdcdfde42de3a200`, true);
// xhr.open('GET', `test.txt`, true);



xhr.onreadystatechange = function () {
    console.log('ready state is ', xhr.readyState);

}

// What to do when response is ready 
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //console.log(json);
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            //  console.log(element, index)
            /* let news = `<div class="card">
              <div class="card-header" id="heading${index}">
                  <h2 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                      aria-expanded="false" aria-controls="collapse${index}">
                     <b>Breaking News ${index + 1}:</b> ${element.title}
                  </button>
                  </h2>
              </div>
  
              <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                  <div class="card-body"> ${element.description}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
              </div>
          </div>`;*/

            let news = ` <div class="accordion-item">
                <div class="accordion-header" id="heading${index}">
                <h2 class="mb-0">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false"                 
      aria-controls="collapse${index}" style="font-size:large; background-color:rgb(191, 218, 118);">
      <strong>${index + 1}:&nbsp </strong> ${element.title}
                
                    </button>
                </h2>
                </div>
                <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                        <div class="accordion-body"> ${element["description"]}. <a href="${element['url']}" target="_blank" >Read more here</a> 
                        <div> <img src="${element["image"]}" alt="" style="height:200px; margin:5px; ">
                         by ${element.source.name}</div>
                        
                        </div>
            </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }

}
xhr.send();







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
//category 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//givetake button
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//givertaker

function togglePopup() {
  document.getElementById("popup-1")
   .classList.toggle("active");
 }

//google maps API

