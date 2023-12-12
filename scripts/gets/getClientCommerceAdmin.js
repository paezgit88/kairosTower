

function generarID() {
  // Generar un número aleatorio y convertirlo a cadena
  let numeroAleatorio = Math.floor(Math.random() * 100000000); // Genera un número aleatorio entre 0 y 99999999
  let idAleatorio = numeroAleatorio.toString().padStart(8, '0'); // Asegura que tenga 8 dígitos completando con ceros a la izquierda si es necesario
  return idAleatorio;
}




async function getClientCatalogsAdmin(filter,param,value) {

  const url = window.location.href;

// Crear un objeto URL a partir de la URL actual
const urlObj = new URL(url);

// Obtener el valor del parámetro "parametro1"
var clientId = urlObj.searchParams.get("clientId");



// Crear un objeto URL a partir de la URL actual


// Obtener el valor del parámetro "parametro1"
var storeId = urlObj.searchParams.get("storeId");



// Crear un objeto URL a partir de la URL actual


// Obtener el valor del parámetro "parametro1"
var st = urlObj.searchParams.get("st");


  document.getElementById("loading-container").style.display = "flex";
  var catid= document.getElementById("list-categoriesListPos").value;
  var catid1= document.getElementById("simil").value;
  var catid2= document.getElementById("scaracter").value;
  var catid3= document.getElementById("list-caracterspecific").value;
  var catid4= document.getElementById("list-caracterCatalog").value;
  if(param=="categoryId"){
value=catid;
  }
  if(param=="simil"){
    value=catid1;
      }
      if(param=="specific"){
        value=catid2;
        param=catid3;
          }
          if(param=="specificCatalog"){
            param=catid4;
           // param=catid3;
              }
  //var clientId=sessionStorage.getItem('clientNow');
  var idin1=1;
  //console.log(epGetClientCatalogsAdmin);
  fetch(epGetClientCatalogsAdmin + clientId+"/"+filter+storeId+"/"+param+"/"+value+"/"+st)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-container1");
          
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.catalogs.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              if (info.isDiscount !== "0") {
                var result = info.discount *info.outPrice;
                var mult= result/100;
                var rest=info.outPrice-mult;
                priceToShow = `${rest}`;

                originPrice=info.outPrice;
                saver=mult;
                dicounter=info.discount;
                
              } else {
                priceToShow = `${info.outPrice}`;
                dicounter=0;
              }
//id unico de agregado al carrito
              let idGenerado = generarID();
              card11.innerHTML = `
                 
                 
             
              <div class="edit-container">

             

              <div class="card">
              <div class="card-header">
              <div id="cartItems1${idGenerado}" class="cart-items1"></div>
              <img src="${info.imgProduct}" alt="Icono" style="max-width: 120px; max-height: 120px;">
              <h2>${info.productName}</h2>
              <p class="item-price">${info.categoryName}</p>
            </div>
            <div class="card-body">
              <p class="item-name">${info.description}</p>


              <p class="card-text">
              <div class="edit-container">
          
    
</div>

${info.isDiscount !== "0" ? `<p class="item-price" style="color: green;">Valor con descuento: $${priceToShow}</p><p class="item-price">Valor original: <del style="color: red;">$${originPrice}</del></p><p class="item-price" style="color: blue;">Ahorro: $${saver}</p>` 
: `<p class="item-price" style="color: green;">$${priceToShow}</p>`}
            
${info.isPromo !== "0" ? ` <p class="card-text">Promoción: </p>` 
: ``}
${info.isDiscount !== "0" ? `  <p class="card-text" style="color: green;">Descuento: ${dicounter}%</p>` 
: ``}
             
            </div>
            <div class="card-footer">
              <div>
              <p class="card-text">Cantidad:</p>
                <input type="text" id="quantityInput${idin1}" value="${info.minQty}">
              </div>
              <button class="btn btn-primary" onClick="addToCart('${idGenerado}','${info.productName}',${priceToShow},'quantityInput${idin1}',${info.outPrice},${idGenerado},'${info.catalogId}','${info.productId}','${info.sku}','${info.categoryId}','${info.categoryName}','${info.storeId}','${info.storeName}','${info.description}','${info.discount}','${info.isDiscount}','${info.promoId}','${info.isPromo}','${info.unit}','${info.readUnit}','${info.unitQty}','${info.unitUnit}','${info.imgProduct}','${info.spcProduct}','${info.minQty}','${info.maxQty}','${info.stock}');">Agregar</button>
             
            </div>
            
            
            
</div>

             
</div>
              
              
              
              
           
                      
               
                  
              `;

              cardContainer11.appendChild(card11);
              //getClientCategoriesList('all','all','all',idin);
              //getClientStoresList1('all','all','all',idin);

              idin1++;
          });
          
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}
// Variable que almacenará el carrito de compras


// Ejemplo de uso de la función addToCart


// Mostrar el carrito de compras actual
var totality=0;
var subtotality=0;
let shoppingCart = [];
let shoppingCartPayment = [];
let shoppingProducts = [];
let products=[];
// Función para agregar un elemento al carrito de compras
function addToCart(uniqueId,productName, price, quantity,outPrice,id,catalogId,productId,sku,categoryId,categoryName,storeId,storeName,description,discount,isDiscount,promoId,isPromo,unit,readUnit,unitQty,unitUnit,imgProduct,spcProduct,minQty,maxQty,stock) {

  var qtyvalue = document.getElementById(quantity).value;
  var total1=price*qtyvalue;
  var subtotal1=outPrice*qtyvalue;
  if(+qtyvalue>+stock){
    alert("Cantidad supera el stock actual "+stock+" "+qtyvalue);
  }if(+qtyvalue<=+stock){

           var resultado=    paramsValidation(maxQty,minQty,qtyvalue,readUnit);
           if(resultado=="true"){

           
                const item = {
                  
                  uniqueId: uniqueId,
                  catalogId: catalogId,
                  productId: productId,
                  productName: productName,
                  productDescription: description,
                  productSku: sku,
                  imgProduct: imgProduct,
                  spcProduct: spcProduct,
                  productPrice: price,
                  outPrice: outPrice,
                  productQty: qtyvalue,
                  categoryId: categoryId,
                  categoryName: categoryName,
                  storeId: storeId,
                  storeName: storeName,
                  isDiscount: isDiscount,
                  discount: discount,
                  promoId: promoId,
                  isPromo: isPromo,
                  unit: unit,
                  readUnit: readUnit,
                  unitQty: unitQty,
                  unitUnit: unitUnit,
                  totalShopping: total1,
                  subTotalShopping: subtotal1
                  
                };

                // Agregar el elemento al carrito de compras

                
                shoppingCart.push({item});

                //console.log(JSON.stringify(shoppingCart));
                //products=[];
                // Devolver el carrito de compras actualizado (esto es opcional)
                //return shoppingCart;
                //addToCart('Producto 1', 25.99, 2);
                totality=totality+total1;
                subtotality=subtotality+subtotal1;
                    
                updateCartView(uniqueId);
           }else{
            alert(resultado);
           }
              }
}

function removeFromCart(uniqueId, productName, price, quantity, outPrice, id) {
  //console.log("Shopping Cart:", shoppingCart);

  const indexToRemove = shoppingCart.findIndex(item => item.item.uniqueId === uniqueId);


  var total1 = price * quantity;
  var subtotal1 = outPrice * quantity;

  if (indexToRemove !== -1) {
    const removedItem = shoppingCart.splice(indexToRemove, 1);
   

    totality = totality - total1;
    subtotality = subtotality - subtotal1;

    updateCartView(uniqueId);
  } else {
    console.log("El producto no se encontró en el carrito.");
  }
}

var totality=0;




function updateCartView(id) {
  const cartItemsDiv = document.getElementById('cartItems');
  const cartItemsDiv1 = document.getElementById('cartItems1');
  const cartItemsDiv12 = document.getElementById('cartItems1' + id);
  cartItemsDiv.innerHTML = ''; // Limpiar el contenido anterior del carrito
  cartItemsDiv1.innerHTML = '';
  cartItemsDiv12.innerHTML = '';
  if (shoppingCart.length === 0) {
    cartItemsDiv.textContent = 'El carrito está vacío';
  } else {
    const ul = document.createElement('ul');
    shoppingCart.forEach(item => {
      const li = document.createElement('li');
      const deleteButton = document.createElement('button'); // Crear botón eliminar
      deleteButton.textContent = 'Eliminar'; // Texto del botón
      deleteButton.addEventListener('click', function() {
        // Función para eliminar el elemento del carrito al hacer click en el botón
        removeFromCart(item.item.uniqueId,item.item.productName,item.item.productPrice,item.item.productQty,item.item.outPrice,id);
        
      });
      li.textContent = `${item.item.catalogId} ${item.item.productQty} ${item.item.productName} = $${item.item.productPrice} - Total: ${item.item.totalShopping}`;
      li.appendChild(deleteButton); // Agregar el botón eliminar al elemento li
      ul.appendChild(li);
    });
    cartItemsDiv.appendChild(ul);

    // Resto del código para mostrar el total, sub-total, ahorro, etc.
    
    const ul1 = document.createElement('ul');
    
  
   
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const li3 = document.createElement('li');
      const li4 = document.createElement('li');

      var saver1=subtotality-totality;
      li1.textContent = `Total: $${totality} `;
      li2.textContent = `Sub-Total: $${subtotality} `;
      li3.textContent = `Ahorro: $${saver1} `;
     

      ul1.appendChild(li1);
      ul1.appendChild(li2);
      ul1.appendChild(li3);
     cartItemsDiv1.appendChild(ul1);
/* 
      const ul2 = document.createElement('ul');
      li4.textContent = `${saver1} `;
      ul2.appendChild(li4);
      
      cartItemsDiv12.appendChild(ul2);*/
  }
}

async function getClientCategories(filter,param,value) {
  document.getElementById("loading-container").style.display = "flex";
  var clientId=sessionStorage.getItem('clientNow');
  var idin1=1;
  fetch(epGetClientCategories + clientId+"/"+filter+"/"+param+"/"+value)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-clientCategories");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.categories.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
             
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                
                

              </h5>
              <p class="card-text">Categoría:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.categoryId}" value="${info.categoryName}" title="${info.categoryName}">
  <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;catName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
              
              
              
             <p class="card-text">
              <div class="edit-container">
              ${info.isActive !== "0" ? `<button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
  <i class="fas fa-ban"></i>
  </button>` 
  : `<button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
  <i class="fas fa-check"></i>
  </button>`}${activo1} 
    
</div>
                     
                  


            






            


              <p class="card-text">Comentarios:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.categoryId}" value="${info.comments}" title="${info.comments}">
  <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;comments&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>


              <p class="card-text">Categoria madre:
              ${info.parentName}
<div class="mb-3">

<select id="list-categoriesList1${idin1}" class="form-control" name="lista" required>

</select>

<button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;parentId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

              <p class="card-text">Categoria madre:
              ${info.categoryType}
              </p>
                            <p class="card-text">Palabras clave:
                            <div class="edit-container">
                <input type="text" class="form-control label-input" id="${info.categoryId}" value="${info.keyWords}" title="${info.keyWords}">
                <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;keyWords&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
                  <i class="fas fa-edit"></i>
                </button>
              </div>
                            </p>
              
              <p class="card-text">
              <div class="edit-container">
  
  <button onclick="editClientCategorie(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
    <i class="fas fa-trash"></i>
  </button>
</div>
              </p>
                      
                  </div>
                  
              `;

              cardContainer11.appendChild(card11);
              getClientCategoriesList3('all','all','all',idin1);
              //getClientStoresList13('all','all','all',idin1);

              idin1++;
          });
          
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}


async function getClientStores(filter,param,value) {
  document.getElementById("loading-container").style.display = "flex";
  var clientId=sessionStorage.getItem('clientNow');
  var idin1=1;
  fetch(epGetClientStores + clientId+"/"+filter+"/"+param+"/"+value)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-clientStores");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.stores.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
             
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                
                

              </h5>
              <p class="card-text">Tienda:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.storeId}" value="${info.storeName}" title="${info.storeName}">
  <button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;storeName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
              
              
              
             <p class="card-text">
              <div class="edit-container">
              ${info.isActive !== "0" ? `<button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
  <i class="fas fa-ban"></i>
  </button>` 
  : `<button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
  <i class="fas fa-check"></i>
  </button>`}${activo1} 
    
</div>
                     
                  


            






            


              <p class="card-text">Comentarios:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.storeId}" value="${info.comments}" title="${info.comments}">
  <button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;comments&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>


             
              <p class="card-text">Tipo de tienda:
              ${info.storeType}
              <div class="edit-container">
              <select id="list-storesListstoreq2" class="form-control" name="lista1" required>
              <option value="ecm">E-commerce</option>
              <option value="pos">E-Punto de venta</option>
              <option value="pos_ecm">E-commerce y punto de venta</option>
              </select>
                <button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;storeType&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

              <p class="card-text">Palabras clave:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.storeId}" value="${info.keyWords}" title="${info.keyWords}">
  <button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;keyWords&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
             
              
              <p class="card-text">
              <div class="edit-container">
  
  <button onclick="editClientStore(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
    <i class="fas fa-trash"></i>
  </button>
</div>
              </p>
                      
                  </div>
                  
              `;

              cardContainer11.appendChild(card11);
           //   getClientCategoriesList3('all','all','all',idin1);
              //getClientStoresList13('all','all','all',idin1);

              idin1++;
          });
          
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}



async function getClientCategoriesListaddPost(filter,param,value) {

  var reposSelect = document.getElementById("list-categoriesListPos");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }


  const url = window.location.href;

  // Crear un objeto URL a partir de la URL actual
  const urlObj = new URL(url);
  
  // Obtener el valor del parámetro "parametro1"
  var uid = urlObj.searchParams.get("clientId");
//var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientCategories+uid+"/"+filter+"/"+param+"/"+value)
  .then(response => response.json())
  .then(data => {
    data.categories.forEach(info => {
      const option = document.createElement("option");
      option.value = info.categoryId;
      option.text = info.categoryName;
      reposSelect.add(option);
      //console.log("hola");
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }

 
async function getClientCategoriesList3(filter,param,value,catId) {

  var reposSelect = document.getElementById("list-categoriesList1"+catId);
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientCategories+uid+"/"+filter+"/"+param+"/"+value)
  .then(response => response.json())
  .then(data => {
    data.categories.forEach(info => {
      const option = document.createElement("option");
      option.value = info.categoryId;
      option.text = info.categoryName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }

 async function getClientCategoriesListadd(filter,param,value) {

  var reposSelect = document.getElementById("list-categoryListstadd");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientCategories+uid+"/"+filter+"/"+param+"/"+value)
  .then(response => response.json())
  .then(data => {
    data.categories.forEach(info => {
      const option = document.createElement("option");
      option.value = info.categoryId+"|"+info.parentId;
      option.text = info.categoryName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }

 
 async function getClientCategoriesListadd96(filter,param,value) {

  var reposSelect = document.getElementById("list-categoryListstadd96");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientCategories+uid+"/"+filter+"/"+param+"/"+value)
  .then(response => response.json())
  .then(data => {
    data.categories.forEach(info => {
      const option = document.createElement("option");
      option.value = info.categoryId;
      option.text = info.categoryName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }


 async function getClientStoresList1(filter,param,value,catid) {

  var reposSelect = document.getElementById("list-storesListstore"+catid);
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientStores+uid+"/"+filter+"/"+param+"/"+value)
  .then(response => response.json())
  .then(data => {
    data.stores.forEach(info => {
      const option = document.createElement("option");
      option.value = info.storeId;
      option.text = info.storeName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }
 
 async function getClientStoresList12(filter,param,value) {

  var reposSelect = document.getElementById("list-storesListstoreq");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientStores+uid+"/"+filter+"/"+param+"/"+value)
  .then(response => response.json())
  .then(data => {
    data.stores.forEach(info => {
      const option = document.createElement("option");
      option.value = info.storeId;
      option.text = info.storeName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }


 async function getClientStoresList1add(filter,param,value) {

  var reposSelect = document.getElementById("list-storeListstadd");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientStores+uid+"/"+filter+"/"+param+"/"+value)
  .then(response => response.json())
  .then(data => {
    data.stores.forEach(info => {
      const option = document.createElement("option");
      option.value = info.storeId;
      option.text = info.storeName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }


 async function getClientProductList1add(filter,param,value) {

  var reposSelect = document.getElementById("list-productListstadd");
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }
var uid=sessionStorage.getItem('clientNow');
	fetch(epGetClientProducts+uid+"/"+filter+"/"+param+"/"+value)
  .then(response => response.json())
  .then(data => {
    data.products.forEach(info => {
      const option = document.createElement("option");
      option.value = info.productId;
      option.text = info.productName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }



async function getClientStyle(param) {
  document.getElementById("loading-container").style.display = "flex";
  fetch(epGetClientStyle + param)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-clientStyle");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.clientStyle.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");

              card11.innerHTML = `
                  <div class="card-body">
                  <div class="edit-container">Fondo:
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.bgColor}" style="background-color: #${info.bgColor}; color: #${info.textColor};" onclick="makeEditable(this)" title="${info.textColor}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;bgColor&quot;,&quot;style&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>

      <div class="edit-container">Texto:
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.textColor}" style="background-color: #${info.textColor}; color: #${info.bgColor};" onclick="makeEditable(this)" title="${info.bgColor}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;textColor&quot;,&quot;style&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      Icono:
      <div class="edit-container">
      <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.imgIcon}" onclick="makeEditable(this)" title="${info.imgIcon}">

 <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;imgIcon&quot;,&quot;style&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
      <i class="fas fa-edit"></i>
      </button>
      </div>
      <h5 class="card-title">
      
      <img src="${info.imgIcon}" alt="Icono" style="width: 100px; height: 100px; display: block; margin: 0 auto;">
  </h5>  
  Logo:
  <div class="edit-container">

  <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.imgLogo}" onclick="makeEditable(this)" title="${info.imgLogo}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;imgLogo&quot;,&quot;style&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
  <i class="fas fa-edit"></i>
  </button>
  </div>  

              <h5 class="card-title">
            
              <img src="${info.imgLogo}" alt="Icono" style="width: 100px; height: 100px; display: block; margin: 0 auto;">
          </h5>

          Gif:
          <div class="edit-container">

          <input type="text" class="form-control label-input" id="${info.clientId}" value="${info.imgGif}" onclick="makeEditable(this)" title="${info.imgGif}"> <button onclick="editExtClient(this,&quot;${info.clientId}&quot;,&quot;imgGif&quot;,&quot;style&quot;)" class="btn btn-primary1 edit-button" title="EDITAR">
          <i class="fas fa-edit"></i>
          </button>
          </div>  

          <h5 class="card-title">
          
          <img src="${info.imgGif}" alt="Icono" style="width: 100px; height: 100px; display: block; margin: 0 auto;">
          </h5>

                      
                      
                   
              `;

              cardContainer11.appendChild(card11);
          });
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
      
}
function makeEditable(inputElement) {
  inputElement.removeAttribute("readonly");
}




async function getCalendarTimedes(param) {
  document.getElementById("loading-container").style.display = "flex";

  sessionStorage.setItem('timeNow',param)
  fetch(epGetCalendarTimedes + param)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-usertimedes");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.assignRoom.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                      <h5 class="card-title"><i class="fas fa-clock"></i>${info.comments}</h5>
                      <p class="card-text">Usuario: ${info.userName}</p>
                      <p class="card-text">
<h3>Elementos actuales</h3>
                     
<div id="checkbox-des${info.assignId}" class="card-container">
<!-- Contenido de la sección expandible -->
</div>


<div class="edit-container">
<button onclick="assignDeselement(&quot;${info.assignId}&quot;)" class="btn btn-primary1 delete-button" title="DESASIGNAR">
<i class="fas fa-ban"></i>
</button>
</div>
</p>
<p class="card-text">
<h3>Asignar elemento</h3>
                     
<div id="checkbox-desa${info.roomId}" class="card-container">
<!-- Contenido de la sección expandible -->
</div>
<div class="edit-container">
<button onclick="assignelementbyuser(&quot;${info.roomId}&quot;,&quot;${info.userId}&quot;,&quot;${info.assignId}&quot;)" class="btn btn-primary1 edit-button" title="VERIFICAR">
<i class="fas fa-plus"></i>
</button>

</div>
</p>
<p class="card-text">
                      <div class="edit-container">
                    
          <button onclick="assignDes(&quot;${info.assignId}&quot;)" class="btn btn-primary1 delete-button" title="DESASIGNAR ROOM">
            <i class="fas fa-trash"></i>
          </button>
        </div>
                      </p>
                      
                        </div>
              `;
              getClientElemntCheckdes(info.assignId,info.roomId);
              getClientElemntCheck(info.roomId,'notassign',info.userId,info.assignId);
              cardContainer11.appendChild(card11);
          });
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}



function editClientCalendar(button, id,filter,reason,value,recharge) {
  // Obtener el valor del campo de texto correspondiente al botón
  var input = button.previousElementSibling;
  //var nombre = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientCalendar.php?calendarId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&reason=' + encodeURIComponent(reason)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      if(reason=="calendarDays"){

        getCalendarDays(recharge);

       
      }
      if(reason=="calendarDaysAssign"){

        getCalendarDaysAssign(recharge);

       
      }
      if(reason=="calendarTime"){

        getCalendarTime(recharge);

       
      }
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}

function editClientRoom(button, id,filter,reason,value,recharge) {
  // Obtener el valor del campo de texto correspondiente al botón

  if(reason=="comments"){

    var input = button.previousElementSibling;
    var value = input.value;

  }

 

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientRoom.php?roomId=' + encodeURIComponent(id)  + '&filter=' + encodeURIComponent(filter)+ '&reason=' + encodeURIComponent(reason)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
        getClientRooms();

       
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
}


// Define una función para mostrar el modal de confirmación cerca del botón
function showConfirmationModalNearButton(message, onConfirm, button) {
  const modalContent = document.createElement('div');
  modalContent.className = 'confirm-modal-content-near-button';

  const messageElement = document.createElement('p');
  messageElement.textContent = message;

  const confirmButton = document.createElement('button');
  confirmButton.textContent = 'Aceptar';
  confirmButton.className = 'confirm-button';

  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancelar';
  cancelButton.className = 'cancel-button';

  // Agrega los elementos al modal
  modalContent.appendChild(messageElement);
  modalContent.appendChild(confirmButton);
  modalContent.appendChild(cancelButton);
  document.body.appendChild(modalContent);

  // Calcula la posición del modal cerca del botón
  const buttonRect = button.getBoundingClientRect();
  const modalRect = modalContent.getBoundingClientRect();

  // Calcula la posición derecha del botón
  const buttonRight = buttonRect.left + buttonRect.width;

  // Calcula la posición del modal para que esté a la derecha del botón
  const top = buttonRect.top + window.scrollY;
  const left = buttonRight + 350; // Agrega un margen a la derecha del botón

  modalContent.style.top = top + 'px';
  modalContent.style.left = left + 'px';

  // Agrega eventos a los botones
  confirmButton.addEventListener('click', () => {
    onConfirm();
    document.body.removeChild(modalContent);
  });

  cancelButton.addEventListener('click', () => {
    document.body.removeChild(modalContent);
  });
}


function editClientProduct(button, clientId,productId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón

  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientProduct.php?productId=' + encodeURIComponent(productId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
        getClientProducts('filter',param,value);

      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="isActive"){

    

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientProduct.php?productId=' + encodeURIComponent(productId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
        getClientProducts('filter',param,value);

 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="del"){
    var confirmMessage = '¿Seguro quieres eliminar el elemento?';
    showConfirmationModalNearButton(confirmMessage, () => {


  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientProduct.php?productId=' + encodeURIComponent(productId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      getClientProducts('filter',param,value);
       
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
  }
 

}

function editClientStore(button, clientId,productId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón

  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientStore.php?storeId=' + encodeURIComponent(productId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
        getClientStores('filter',param,value);

      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="isActive"){

    

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientStore.php?storeId=' + encodeURIComponent(productId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
        getClientProducts('filter',param,value);

 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="del"){
    var confirmMessage = '¿Seguro quieres eliminar el elemento?';
    showConfirmationModalNearButton(confirmMessage, () => {


  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientStore.php?storeId=' + encodeURIComponent(productId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      getClientProducts('filter',param,value);
       
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
  }
 

}



function editClientCatalog(button, clientId,catalogId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón

  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientCatalog.php?catalogId=' + encodeURIComponent(catalogId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      getClientCatalogs('basic|'+catalogId,'catalogId',catalogId);

      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="isActive"){

    

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientCatalog.php?catalogId=' + encodeURIComponent(catalogId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      getClientCatalogs('basic|'+catalogId,'catalogId',catalogId);
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="del"){
    var confirmMessage = '¿Seguro quieres eliminar el elemento?';
    showConfirmationModalNearButton(confirmMessage, () => {


  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientCatalog.php?catalogId=' + encodeURIComponent(catalogId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      getClientProducts('filter',param,value);
       
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
  }
 

}


function editClientCategorie(button, clientId,catalogId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón

  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientCategorie.php?categoryId=' + encodeURIComponent(catalogId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      console.log(catalogId+" "+value);
      getClientCategories('filter','catId',catalogId);

      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="isActive"){

    

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientCategorie.php?categoryId=' + encodeURIComponent(catalogId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      getClientCategories('filter','catId',catalogId);
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="del"){
    var confirmMessage = '¿Seguro quieres eliminar el elemento?';
    showConfirmationModalNearButton(confirmMessage, () => {


  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientCategorie.php?categoryId=' + encodeURIComponent(catalogId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      getClientCategories('filter',param,value);
       
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
  }
 

}

function createCheckbox(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckbox"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChange); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" $"+info.amount));
  label.classList.add("custom-checkbox-label"); // Agrega una clase CSS al label

  return label;
}

function createCheckbox1(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckboxelement"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChangeAssignElement); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" $"+info.amount));

  label.classList.add("custom-checkbox-label"); // Agrega una clase CSS al label
  return label;
}

function createCheckbox3(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckboxelementbyadmin"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChangeAssignElementbyuser); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" / "+info.comments));

  label.classList.add("custom-checkbox-label"); // Agrega una clase CSS al label
  return label;
}

function createCheckbox4(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckboxelementbyadminnot"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChangeAssignElementbyusernot); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" / "+info.comments));

  label.classList.add("custom-checkbox-label"); // Agrega una clase CSS al label
  return label;
}

async function getClientElemntCheck(filter,param,ids,ids1) {
  
  document.getElementById("loading-container").style.display = "flex";
if(param=="assign"){

  var param=sessionStorage.getItem('clientNow');
  fetch(epGetClientElements + param+"/free/"+filter+"/"+ids+"/"+ids1)
      .then(response => response.json())
      .then(data => {
        
          const checkboxContainer = document.getElementById("checkbox-container");
        
          checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos

          data.clientElement.forEach(info => {
              const checkbox = createCheckbox(info);
              checkboxContainer.appendChild(checkbox);
          });

          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });

}if(param="notassign"){
  

  var param=sessionStorage.getItem('clientNow');
  fetch(epGetClientElements + param+"/assign/"+filter+"/"+ids+"/"+ids1)
      .then(response => response.json())
      .then(data => {
        
          const checkboxContainer = document.getElementById("checkbox-desa"+filter);
        
          checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos

          data.clientElement.forEach(info => {
              const checkbox = createCheckbox1(info);
              checkboxContainer.appendChild(checkbox);
          });

          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });

    }
    if(param="usedbyclient"){
  

      var param=sessionStorage.getItem('clientNow');
      fetch(epGetClientElements + param+"/usedbyclient/"+filter+"/"+ids+"/"+ids1)
          .then(response => response.json())
          .then(data => {
            
              const checkboxContainer = document.getElementById("checkbox-roomid"+filter);
            
              checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos
    
              data.clientElement.forEach(info => {
                  const checkbox = createCheckbox3(info);
                  checkboxContainer.appendChild(checkbox);
              });
    
              document.getElementById("loading-container").style.display = "none";
          })
          .catch(error => {
              console.error("Error:", error);
              document.getElementById("loading-container").style.display = "none";
          });
    
        }

        if(param="notusedbyclient"){
  

          var param=sessionStorage.getItem('clientNow');
          fetch(epGetClientElements + param+"/notusedbyclient/"+filter+"/"+ids+"/"+ids1)
              .then(response => response.json())
              .then(data => {
                
                  const checkboxContainer = document.getElementById("checkbox-roomid1"+filter);
                
                  checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos
        
                  data.clientElement.forEach(info => {
                      const checkbox = createCheckbox4(info);
                      checkboxContainer.appendChild(checkbox);
                  });
        
                  document.getElementById("loading-container").style.display = "none";
              })
              .catch(error => {
                  console.error("Error:", error);
                  document.getElementById("loading-container").style.display = "none";
              });
        
            }
}
var selectedAssignments = []; // Array para almacenar los elementos seleccionados

function handleCheckboxChange(event) {
    const assignId = event.target.value;

    if (event.target.checked) {
        // Checkbox seleccionado, agrega el assignId al array
        selectedAssignments.push(assignId);
       
    } else {
        // Checkbox deseleccionado, elimina el assignId del array
        const index = selectedAssignments.indexOf(assignId);
        if (index !== -1) {
            selectedAssignments.splice(index, 1);
            
        }
    }

    // Muestra el contenido del array
   // console.log(selectedAssignments);
}

// Función para ejecutar al cambiar la selección en el select


// Función para ejecutar al cambiar la selección en el select
function onClientRoomSelect(param) {
  const selectElement = document.getElementById("list-clientroom");
  const selectedValue = selectElement.value;
  selectedAssignments.splice(0, selectedAssignments.length);

  // Verifica si se ha seleccionado un valor
  if (selectedValue) {
    // Ejecuta la función getClientElemntCheck con el valor seleccionado
    getClientElemntCheck(selectedValue,param,"1","1");

  }
}
















 

function createCheckboxdes(info) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "assignCheckbox"; // Asigna un nombre a los checkboxes
  checkbox.value = info.elementId; // Asigna un valor (puedes usar un identificador único)
  checkbox.addEventListener("change", handleCheckboxChangedes); // Agrega un manejador de eventos para el cambio

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(info.elementName+" $"+info.amount));

  return label;
}

async function getClientElemntCheckdes(filter,param) {
  document.getElementById("loading-container").style.display = "flex";

  var param=sessionStorage.getItem('clientNow');
  fetch(epGetClientElements + param+"/hold/"+filter+"/1/1")
      .then(response => response.json())
      .then(data => {
          const checkboxContainer = document.getElementById("checkbox-des"+filter);
          checkboxContainer.innerHTML = ""; // Borra los checkboxes antiguos

          data.clientElement.forEach(info => {
              const checkbox = createCheckboxdes(info);
              checkboxContainer.appendChild(checkbox);
          });

          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}
var selectedAssignmentsdes = []; // Array para almacenar los elementos seleccionados

function handleCheckboxChangedes(event) {
    const assignId = event.target.value;

    if (event.target.checked) {
        // Checkbox seleccionado, agrega el assignId al array
        selectedAssignmentsdes.push(assignId);
       
    } else {
        // Checkbox deseleccionado, elimina el assignId del array
        const index = selectedAssignmentsdes.indexOf(assignId);
        if (index !== -1) {
          selectedAssignmentsdes.splice(index, 1);
            
        }
    }

    // Muestra el contenido del array
    //console.log(selectedAssignmentsdes);
}

// Función para ejecutar al cambiar la selección en el select



var selectedAssignmentselement = [];

function handleCheckboxChangeAssignElement(event) {
  const assignId = event.target.value;

  if (event.target.checked) {
      // Checkbox seleccionado, agrega el assignId al array
      selectedAssignmentselement.push(assignId);
     
  } else {
      // Checkbox deseleccionado, elimina el assignId del array
      const index = selectedAssignmentselement.indexOf(assignId);
      if (index !== -1) {
        selectedAssignmentselement.splice(index, 1);
          
      }
  }

  // Muestra el contenido del array
  //console.log(selectedAssignmentselement);
}

// Función para ejecutar al cambiar la selección en el select



var selectedAssignmentselementbyuser = [];

function handleCheckboxChangeAssignElementbyuser(event) {
  const assignId = event.target.value;

  if (event.target.checked) {
      // Checkbox seleccionado, agrega el assignId al array
      selectedAssignmentselementbyuser.push(assignId);
     
  } else {
      // Checkbox deseleccionado, elimina el assignId del array
      const index = selectedAssignmentselementbyuser.indexOf(assignId);
      if (index !== -1) {
        selectedAssignmentselementbyuser.splice(index, 1);
          
      }
  }

  // Muestra el contenido del array
 // console.log(selectedAssignmentselementbyuser);
}



var selectedAssignmentselementbyusernot = [];

function handleCheckboxChangeAssignElementbyusernot(event) {
  const assignId = event.target.value;

  if (event.target.checked) {
      // Checkbox seleccionado, agrega el assignId al array
      selectedAssignmentselementbyusernot.push(assignId);
     
  } else {
      // Checkbox deseleccionado, elimina el assignId del array
      const index = selectedAssignmentselementbyusernot.indexOf(assignId);
      if (index !== -1) {
        selectedAssignmentselementbyusernot.splice(index, 1);
          
      }
  }

  // Muestra el contenido del array
  //console.log(selectedAssignmentselementbyusernot);
}










function arrayToHTMLCards() {
  const cardsContainer = document.getElementById('card-validatePosShop');
  cardsContainer.innerHTML = ""; // Borra las tarjetas antiguas
  shoppingCart.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardContent = `
      <h4>${item.item.productName}</h4>
      <p>X ${item.item.productQty}</p>
      <p>Valor original $${item.item.outPrice}</p>
      <p>Valor con descuento $${item.item.productPrice}</p>
      <p>Total: $${item.item.totalShopping}</p>
      <p>Sub-Total: $${item.item.subTotalShopping}</p>
      <p>Ahorro: $${item.item.subTotalShopping-item.item.totalShopping}</p>
      <button class="btn btn-primary" onClick=" removeFromCart('${item.item.uniqueId}','${item.item.productName}',${item.item.productPrice},${item.item.productQty},${item.item.outPrice},${item.item.uniqueId});arrayToHTMLCards();arrayToHTMLCardsPayload();">Remover</button>
          
      `;

    card.innerHTML = cardContent;
    cardsContainer.appendChild(card);
  });
}



function arrayToHTMLCardsPayload() {
  const cardsContainer = document.getElementById('card-validatePosShopPayload');
  var pType= document.getElementById('list-paymentType').value;
  var pMethod= document.getElementById('list-paymentMethod').value;
  var pBank= document.getElementById('list-bankMethod').value;
  var pWith= document.getElementById('paymentcash').value;
  var pExc=+pWith-totality;
  cardsContainer.innerHTML = ""; // Borra las tarjetas antiguas
var subto=subtotality-totality;
 

if(pType!="cash"){
pWith=pType+"/"+pMethod+"/"+pBank;
pExc=0;
}
  const payment = {
    total: totality,
    subTotal: subtotality,
    saver: subto,
    paymentType: pType,
    paymentMethod: pMethod,
    bankMethod: pBank,
    payWith: pWith,
    exchangeCash: pExc
    
  };
  shoppingCartPayment = [];
  // Agregar el elemento al carrito de compras
  shoppingCartPayment.push({payment});
  shoppingCart.push({payment});
  //console.log(JSON.stringify(shoppingCart));
  shoppingCartPayment.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardContent = `
      <h4>Resumen</h4>
      
      <p>Total: $${item.payment.total}</p>
      <p>Sub-Total: $${item.payment.subTotal}</p>
      <p>Ahorro: $${item.payment.saver}</p>
          
      `;

    card.innerHTML = cardContent;
    cardsContainer.appendChild(card);
  });
}


function paramsValidation(maxqty,minqty,value,readUnit){

if(+value<+minqty){
return "La cantidad mínima debe ser: "+minqty;
}
if(+value>+maxqty){
  return "La cantidad máxima debe ser: "+maxqty;
  }
  if(+value<=+maxqty && +value >=+minqty){

    if(readUnit=="un" || readUnit=="UN" || readUnit=="box" || readUnit=="pkg" || readUnit=="bag"){
  var isInt= esEntero(+value);
  if(esEntero(+value)){
    return "true";
  }if(isInt!="true"){
    return "Cantidad incorrecta, no se admiten (puntos '.', comas ','), el producto se mide en: "+readUnit;
  }
    }  else{
      return "true";
    }
    
    }



}

function esEntero(numero) {
  return Number.isInteger(numero);
}





 function getCustomerList(containerId) {

  var reposSelect = document.getElementById(containerId);
  while (reposSelect.firstChild) {
    reposSelect.removeChild(reposSelect.firstChild);
  }




	fetch('https://dev-kairosgateway.lugma.tech/kairosGateway/apiClient/v1/getCustomers/UfbHdZaJ%206WclAmsaP9H7SR2WmpDbl1OL9/2e44d504/all/all/all')
  .then(response => response.json())
  .then(data => {
    data.customers.forEach(info => {
      const option = document.createElement("option");
      option.value = info.customerId;
      option.text = info.customerName+" "+info.customerLastName;
      reposSelect.add(option);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

 }


 
async function getClientCustomersPos(filter,param,value) {
  document.getElementById("loading-container").style.display = "flex";
  const url = window.location.href;
value= document.getElementById('list-customerget').value;
  // Crear un objeto URL a partir de la URL actual
  const urlObj = new URL(url);
  
  // Obtener el valor del parámetro "parametro1"
  var clientId = urlObj.searchParams.get("clientId");
  //var clientId=sessionStorage.getItem('clientNow');
  var idin1=1;
  fetch(epGetClientCustomers + clientId+"/"+filter+"/"+param+"/"+value)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-validateClientPos");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.customers.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
             
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                
                 

              </h5>
              <p class="card-text">Nombre: ${info.customerName}
             
              </p>
              <p class="card-text">Apellido: ${info.customerLastName}
              
              </p>

              <p class="card-text">Datos: ${info.customerMail} / ${info.customerPhone}
            
              </p>
             

             
              <p class="card-text">Puntos:
              ${info.customerPoints}
              
              </p>
              <p class="card-text">Estrellas:
              ${info.customerStars}
              
              </p>
              <p class="card-text">Cada punto equivale:
              $${info.pointsValue}
              
              </p>
              <p class="card-text">Con cada $${info.pointsEq} en compras recolectas un punto:
              
              
              </p>
              <p class="card-text">Total en puntos:
              $${info.customerPoints*info.pointsValue}
              
              </p>
             
              
          
                      
                  </div>
                  
              `;

              cardContainer11.appendChild(card11);
           //   getClientCategoriesList3('all','all','all',idin1);
              //getClientStoresList13('all','all','all',idin1);

              idin1++;
          });
          
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
}



function putOrderPaymentStatus() {
  // Obtener el valor del campo de texto correspondiente al botón
  const url1 = window.location.href;
  //value= document.getElementById('list-customerget').value;
    // Crear un objeto URL a partir de la URL actual
    const urlObj = new URL(url1);
    
    // Obtener el valor del parámetro "parametro1"
    var clientId = urlObj.searchParams.get("clientId");
 

    var input = document.getElementById('paymentReference').value;
    

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientOrderPayment.php?reference=' + encodeURIComponent(input)  + '&clientId=' + encodeURIComponent(clientId);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
       // getClientStores('filter',param,value);

      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  
 
  }
 


