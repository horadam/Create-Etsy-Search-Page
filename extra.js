var htmlstr = items.results.map (item => {
    return ` 
    <div class="item">
                        <img src="${item.Images[0].url_570xN}">
                        <p class="name">${item.title.substring(0, 20)}</p>
                        <p class="soldBy">${item.Shop.shop_name}</p>
                        <p class="price">$${item.price}</p>
                
    
                    </div> 
    `
}).join('')

// var htmlstr = items.results.map (item => {
//     return ` 
//     <div class="item">
//                         <div style="background-image:url("${item.Images[0].url_570xN}");
//                         background-position:cover;background-repeat:no-repeat;width:247px;height:190px;><div>
//                         <p class="name">${item.title.substring(0, 20)}</p>
//                         <p class="soldBy">${item.Shop.shop_name}</p>
//                         <p class="price">$${item.price}</p>
                
    
//                     </div> 
//     `
// }).join('')