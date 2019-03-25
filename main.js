

var mainResultsContainer = document.querySelector('#mainResultsContainer')



var htmlstr = items.results.map (item => {
var title;

if (item.title.length>25) {
    title=item.title.substring(0, 25) + "..."
} else {
    title=item.title
}


    return ` 
    <div class="item">
                        <img src="${item.Images[0].url_170x135}">
                        <div class="heart"><a href="#"><i class="fas fa-heart"></i></a></div>
                        <p class="name">${title}</p>
                        <p class="soldBy">${item.Shop.shop_name}</p>
                        <p class="price">$${item.price}</p>
                
    
                    </div> 
    `
}).join('')

mainResultsContainer.innerHTML = htmlstr




// var data = [
//     {
//         img: 'http://placehold.it/200/200',
//         name: 'Name 1',
//         soldBy: 'Guy1',
//         price: 19.90,

//     },
//     {
//         img: 'http://placehold.it/200/200',
//         name: 'Name 2',
//         soldBy: 'Guy2',
//         price: 19.90,

//     },
//     {
//         img: 'http://placehold.it/200/200',
//         name: 'Name 3',
//         soldBy: 'Guy3',
//         price: 19.90,

//     },

// ]
// var template = ` 
// <div class="item">
//                     <img src="http://placehold.it/200/200">
//                     <p class="name"></p>
//                     <p class="soldBy"></p>
//                     <p class="price"></p>

//                 </div> 
// `