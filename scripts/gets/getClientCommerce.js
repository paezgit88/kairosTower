

async function getClientProducts(filter,param,value) {
  document.getElementById("loading-container").style.display = "flex";
  var clientId=sessionStorage.getItem('clientNow');
  fetch(epGetClientProducts + clientId+"/"+filter+"/"+param+"/"+value)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-clientProducts");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.products.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
             
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                  <img src="${info.imgProduct}" alt="Icono" style="max-width: 120px; max-height: 120px;">

                  <div class="edit-container">
                  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.imgProduct}" title="${info.imgProduct}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;imgProduct&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>

              </h5>
              <p class="card-text">Nombre de producto:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.productName}" title="${info.productName}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;productName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
              
              
              
              
             <p class="card-text">
              <div class="edit-container">
              ${info.isActive !== "0" ? `<button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
  <i class="fas fa-ban"></i>
  </button>` 
  : `<button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
  <i class="fas fa-check"></i>
  </button>`}${activo1} 
    
</div>
                     
                      <p class="card-text">Descripción de producto:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.description}" title="${info.description}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;description&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

            

              <p class="card-text">Tipo de producto:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.productType}" title="${info.productType}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;productType&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
                        
            
                     


           



              <p class="card-text">Valor de compra:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.inPrice}" title="${info.productId}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;inPrice&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>



              <p class="card-text">SKU:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.sku}" title="${info.sku}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;sku&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

              <p class="card-text">EAN1:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.ean1}" title="${info.ean1}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;ean1&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>


              <p class="card-text">EAN2:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.ean2}" title="${info.ean2}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;ean2&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

              <p class="card-text">Caracteriscticas técnicas de producto:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.spcProduct}" title="${info.spcProduct}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;spcProduct&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

              <p class="card-text">Palabras de busqueda:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.productId}" value="${info.keyWords}" title="${info.keyWords}">
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;keyWords&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
              <p class="card-text">
              <div class="edit-container">
  
  <button onclick="editClientProduct(this,&quot;${info.clientId}&quot;,&quot;${info.productId}&quot;,&quot;del&quot;,&quot;del&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
    <i class="fas fa-trash"></i>
  </button>
</div>
              </p>
                      
                  </div>
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

















document.getElementById("filterproducts").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("repos-productClient").value;
  var value = document.getElementById("keywordsearch").value;
  
  getClientProducts('filter',param,value);
});


document.getElementById("searchproducts").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("repos-productClient").value;
  var value = document.getElementById("keywordsearch").value;
  
  getClientProducts('browser','param',value);
});








document.getElementById("filtercatalogs").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("repos-catalogClient").value;
  var value = document.getElementById("keywordsearchcatalog").value;
  
  getClientCatalogs(param+'|param','param',value);
});


document.getElementById("searchcatalogs").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("repos-catalogClient").value;
  var value = document.getElementById("keywordsearchcatalog").value;
  
  getClientCatalogs('browser|param','param',value);
});



document.getElementById("filtercatalogsbystore").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("list-storesListstoreq").value;
  var value = document.getElementById("keywordsearchcatalog").value;
  
  getClientCatalogs('filter|'+param,'param',value);
});



document.getElementById("filtercatalogsbystoresimple").addEventListener("click", function() {
  // Obtén los valores de los campos
  var param = document.getElementById("list-storesListstoreq").value;
  var value = document.getElementById("keywordsearchcatalog").value;
  
  getClientCatalogs('store|'+param,'param','param');
});




async function getClientCatalogs(filter,param,value) {
  document.getElementById("loading-container").style.display = "flex";
  var clientId=sessionStorage.getItem('clientNow');
  var idin=1;
  fetch(epGetClientCatalogs + clientId+"/"+filter+"/"+param+"/"+value)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-clientCatalogs");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.catalogs.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
             
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                  <img src="${info.imgProduct}" alt="Icono" style="max-width: 120px; max-height: 120px;">

                

              </h5>
              <p class="card-text">
              <div class="edit-container">
              ${info.productName}
</div>
              </p>
              
              
              
              
             <p class="card-text">
              <div class="edit-container">
              ${info.isActive !== "0" ? `<button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
  <i class="fas fa-ban"></i>
  </button>` 
  : `<button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
  <i class="fas fa-check"></i>
  </button>`}${activo1} 
    
</div>
                     
                      <p class="card-text">
              <div class="edit-container">
              ${info.description}
</div>
              </p>

            

             
                        
            
                     


           



              <p class="card-text">Tienda:
              <div class="edit-container">
              ${info.storeName}
              </div>
              <div class="mb-3">

<select id="list-storesListstore${idin}" class="form-control" name="lista1" required></select>

<button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;storeId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>





              <p class="card-text">Categoría:
              <div class="edit-container">
              ${info.categoryName}

           
</div>
<div class="mb-3">

<select id="list-categoriesList${idin}" class="form-control" name="lista" required></select>

<button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;categoryId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
             

            


              <p class="card-text">Stock:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.stock}" title="${info.stock}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;stock&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

              <p class="card-text">Stock de seguridad:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.secStock}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;secStock&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

              <p class="card-text">Min qty:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.minQty}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;minQty&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>


              <p class="card-text">Max qty:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.maxQty}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;maxQty&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
             



              <p class="card-text">Precio de venta:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.outPrice}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;outPrice&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

            
              <p class="card-text">
              Promoción:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isPromo}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isPpromo&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
  </div>
  </p>
  <p class="card-text">
  Promoción id:
  <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.promoId}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;promoId&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
  </div>
  </p>
  <p class="card-text">
  Descuento:
  <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isDiscount}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isDiscount&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
  </div>
</p>

<p class="card-text">
  Valor de descuento:
  <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.discount}%" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;discount&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
  </div>
  </p>
<p class="card-text">
  POS:
  <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isPos}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isPos&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
  </div>
  </p>
  <p class="card-text">
  E-Commerce:
  <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isEcommerce}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isEcommerce&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
  </div>
</p>
<p class="card-text">
  Reserva interna:
  <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isInternal}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isInternal&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
  </div>
</p>

<p class="card-text">
  Bodega:
  <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.isStocked}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;isStocked&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
  </div>
  </p>

  <p class="card-text">
  Unidad:
  <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.unit}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;unit&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
  </div>
  </p>

  <p class="card-text">
  Unidad de lectura y calculo: <b>${info.readUnit}</b>
  <div class="edit-container">

<select id="list-unidadpos" class="form-control" name="lista1" required>
<option value="un">Unidad (un)</option>
<option value="cm">Centímetros (cm)</option>
<option value="m">Metros (m)</option>
<option value="km">Kilómetros (km)</option>
<option value="in">Pulgadas (in)</option>
<option value="ft">Pies (ft)</option>
<option value="mi">Millas (mi)</option>
<option value="g">Gramos (g)</option>
<option value="kg">Kilogramos (kg)</option>
<option value="oz">Onzas (oz)</option>
<option value="lb">Libras (lb)</option>
<option value="l">Litros (l)</option>
<option value="ml">Mililitros (ml)</option>
<option value="gal">Galones (gal)</option>
<option value="s">Segundos (s)</option>
<option value="min">Minutos (min)</option>
<option value="h">Horas (h)</option>
<option value="box">Caja (box)</option>
<option value="pkg">Paquete (pkg)</option>
<option value="bag">Bolsa (bag)</option>
</select>


  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;readUnit&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
  </div>
  </p>
  <p class="card-text">
  Cantidad por unidad:
  <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.unitQty}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;unitQty&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
  </div>
  </p>

  <p class="card-text">
  Unidades en unidad:
  <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.catalogId}" value="${info.unitUnit}" title="${info.spcProduct}">
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;unitUnit&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
  </div>
  </p>
              <p class="card-text">
              <div class="edit-container">
  
  <button onclick="editClientCatalog(this,&quot;${info.clientId}&quot;,&quot;${info.catalogId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
    <i class="fas fa-trash"></i>
  </button>
</div>
              </p>
                      
                  </div>
                  
              `;

              cardContainer11.appendChild(card11);
              getClientCategoriesList('all','all','all',idin);
              getClientStoresList1('all','all','all',idin);

              idin++;
          });
          
          document.getElementById("loading-container").style.display = "none";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("loading-container").style.display = "none";
      });
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
              const referencia = info.storeType === "pos" ? ref="pos.php" : info.storeType === "ecm" ? ref="ecm.php" : info.storeType === "pos_ecm" ? ref="pos_ecm.php" : ref="session.php";
             
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                
                  <a href="${referencia}?clientId=${info.clientId}&storeId=${info.storeId}&st=${info.storeType}" target="_blank" class="btn btn-primary1 edit-button" style="width: 54px;height: 52px; font-size: 24px;" title="BLOQUEAR">
                  <i class="fas fa-store"></i>
                </a>

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



async function getClientCustomers(filter,param,value) {
  document.getElementById("loading-container").style.display = "flex";
  var clientId=sessionStorage.getItem('clientNow');
  var idin1=1;
  fetch(epGetClientCustomers + clientId+"/"+filter+"/"+param+"/"+value)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-clientCustomer");
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
              <p class="card-text">Nombre del cliente:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerName}" title="${info.customerName}">
  <button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;customerName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
              <p class="card-text">Apellido del cliente:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerLastName}" title="${info.customerLastName}">
  <button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;customerLastName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
              
              
              
             <p class="card-text">
              <div class="edit-container">
              ${info.isActive !== "0" ? `<button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
  <i class="fas fa-ban"></i>
  </button>` 
  : `<button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
  <i class="fas fa-check"></i>
  </button>`}${activo1} 
    
</div>
                     
                  


            






            


              <p class="card-text">Correo:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerMail}" title="${info.customerMail}">
  <button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;customerName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
              <p class="card-text">Teléfono:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerPhone}" title="${info.customerPhone}">
  <button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.customerId}&quot;,&quot;customerPhone&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

             
              <p class="card-text">Puntos:
              ${info.customerPoints}
              
              </p>
              <p class="card-text">Estrellas:
              ${info.customerStars}
              
              </p>

              <p class="card-text">Tipo de cliente:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.customerId}" value="${info.customerType}" title="${info.customerType}">
  <button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.storeId}&quot;,&quot;customerType&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
             
              
              <p class="card-text">
              <div class="edit-container">
  
  <button onclick="editClientCustomer(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
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


async function getClientDelivery(filter,param,value) {
  document.getElementById("loading-container").style.display = "flex";
  var clientId=sessionStorage.getItem('clientNow');
  var idin1=1;
  fetch(epGetClientDelivery + clientId+"/"+filter+"/"+param+"/"+value)
      .then(response => response.json())
      .then(data => {
          const cardContainer11 = document.getElementById("card-clientDelivery");
          cardContainer11.innerHTML = ""; // Borra las tarjetas antiguas
          data.delivery.forEach(info => {
              const card11 = document.createElement("div");
              card11.classList.add("card");
              const backgroundColor = info.isActive === "0" ? "  #cc0007" : "#ffffff";
              const activo1 = info.isActive === "0" ? activo="INACTIVO" : activo="ACTIVO";
              const disRulesArray = JSON.parse(info.distanceRules);
              card11.innerHTML = `
                  <div class="card-body" style="background-color: ${backgroundColor};">
                  <h5 class="card-title">
                  <p class="card-text"> <i class="fas fa-guitar"></i></p>
                
                 

              </h5>
              <p class="card-text">Nombre del repartidor:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.deliveryId}" value="${info.deliveryName}" title="${info.deliveryName}">
  <button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;deliveryName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
              <p class="card-text">Apellido del repartidor:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.deliveryId}" value="${info.deliveryLastName}" title="${info.deliveryLastName}">
  <button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;deliveryLastName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
              
              
              
             <p class="card-text">
              <div class="edit-container">
              ${info.isActive !== "0" ? `<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;isActive&quot;,&quot;0&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="DESACTIVAR">
  <i class="fas fa-ban"></i>
  </button>` 
  : `<button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;isActive&quot;,&quot;1&quot;,&quot;isActive&quot;)" class="btn btn-primary1 delete-button" title="ACTIVAR">
  <i class="fas fa-check"></i>
  </button>`}${activo1} 
    
</div>
                     
                  


            






            


              <p class="card-text">Correo:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.deliveryId}" value="${info.deliveryMail}" title="${info.customerMail}">
  <button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;customerName&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
              <p class="card-text">Teléfono:
              <div class="edit-container">
  <input type="text" class="form-control label-input" id="${info.deliveryId}" value="${info.deliveryContact}" title="${info.deliveryContact}">
  <button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;customerPhone&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>

              <p class="card-text">Reglas de distancia y tiempo:
              <div class="edit-container">
              <p class="card-text">
              Calle inicio
              <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startStreet']}" title=" ${disRulesArray[0]['distance']['startStreet']}">
            </p>
            </div>
            <p class="card-text"> Cardinalidad inicio
            <button  class="btn btn-primary1 delete-button" onClick="openPopup('popCarStreetStart');"><i id="infoIcon" class="fas fa-info" style="cursor: pointer;"></i></button>
           

            <!-- Popup -->
            <div id="popCarStreetStart" class="popup">
              <p>NORTE (N)<br>SUR (S)</p>
              <button onclick="closePopup('popCarStreetStart')">Cerrar</button>
            </div>
            <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startLocationStreet']}" title=" ${disRulesArray[0]['distance']['startLocationStreet']}">
          </p>
            <p class="card-text">
            Calle fin
            <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endStreet']}" title=" ${disRulesArray[0]['distance']['endStreet']}">
          </p>
          <p class="card-text">
          Cardinalidad fin
          <button  class="btn btn-primary1 delete-button" onClick="openPopup('popCarStreetEnd');"><i id="infoIcon" class="fas fa-info" style="cursor: pointer;"></i></button>
           

          <!-- Popup -->
          <div id="popCarStreetEnd" class="popup">
            <p>NORTE (N)<br>SUR (S)</p>
            <button onclick="closePopup('popCarStreetEnd')">Cerrar</button>
          </div>
          <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endLocationStreet']}" title=" ${disRulesArray[0]['distance']['endLocationStreet']}">
        </p>
          <p class="card-text">
          carrera inicio
          <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startAvenue']}" title=" ${disRulesArray[0]['distance']['startAvenue']}">
        </p>
        <p class="card-text">
        Cardinalidad inicio
        <button  class="btn btn-primary1 delete-button" onClick="openPopup('popCarAvenueStart');"><i id="infoIcon" class="fas fa-info" style="cursor: pointer;"></i></button>
           

        <!-- Popup -->
        <div id="popCarAvenueStart" class="popup">
          <p>ESTE (EST)<br>OESTE (OES)</p>
          <button onclick="closePopup('popCarAvenueStart')">Cerrar</button>
        </div>
        <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startLocationAvenue']}" title=" ${disRulesArray[0]['distance']['startLocationAvenue']}">
      </p>
        <p class="card-text">
        Carrera fin
        <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endAvenue']}" title=" ${disRulesArray[0]['distance']['endAvenue']}">
      </p>
      <p class="card-text">
      Cardinalidad fin
      <button  class="btn btn-primary1 delete-button" onClick="openPopup('popCarAvenueEnd');"><i id="infoIcon" class="fas fa-info" style="cursor: pointer;"></i></button>
           

      <!-- Popup -->
      <div id="popCarAvenueEnd" class="popup">
        <p>ESTE (EST)<br>OESTE (OES)</p>
        <button onclick="closePopup('popCarAvenueEnd')">Cerrar</button>
      </div>
      <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endLocationAvenue']}" title=" ${disRulesArray[0]['distance']['endLocationAvenue']}">
    </p>

    <p class="card-text">
    Tiempo inicio
    <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['startTime']}" title=" ${disRulesArray[0]['distance']['startTime']}">
  </p>
  <p class="card-text">
  Cardinalidad fin
  <input type="text" class="form-control label-input" id="${info.deliveryId}" value=" ${disRulesArray[0]['distance']['endTime']}" title=" ${disRulesArray[0]['distance']['endTime']}">
</p>
  <button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.deliveryId}&quot;,&quot;customerPhone&quot;,&quot;data&quot;,&quot;data&quot;)" class="btn btn-primary1 delete-button" title="EDITAR">
    <i class="fas fa-edit"></i>
  </button>
</div>
              </p>
             
              
              <p class="card-text">
              <div class="edit-container">
  
  <button onclick="editClientDelivery(this,&quot;${info.clientId}&quot;,&quot;${info.categoryId}&quot;,&quot;del&quot;,&quot;1&quot;,&quot;del&quot;)" class="btn btn-primary1 delete-button" title="ELIMINAR">
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

function openPopup(idelemento) {
  var popup = document.getElementById(idelemento);
  popup.style.display = "block";
}

// Función para cerrar el popup
function closePopup(idelemento) {
  var popup = document.getElementById(idelemento);
  popup.style.display = "none";
}

// Event listener para el ícono de información

async function getClientCategoriesList(filter,param,value,catId) {

  var reposSelect = document.getElementById("list-categoriesList"+catId);
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


function editClientCustomer(button, clientId,customerId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón

  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientCustomer.php?customerId=' + encodeURIComponent(customerId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
        getClientCustomers('filter',param,value);

      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="isActive"){

    

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientCustomer.php?customerId=' + encodeURIComponent(customerId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      getClientCustomers('filter',param,value);

 
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
  var url = 'controller/putClientCustomer.php?customerId=' + encodeURIComponent(customerId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      getClientCustomers('filter',param,value);
       
      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  },button);
  }
 

}


function editClientDelivery(button, clientId,customerId,param,value,reason) {
  // Obtener el valor del campo de texto correspondiente al botón

  if(reason=="data"){

    var input = button.previousElementSibling;
    var value = input.value;

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientDelivery.php?deliveryId=' + encodeURIComponent(customerId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
        getClientDelivery('filter',param,value);

      
 
    })
    .catch(error => {
      // Aquí puedes manejar los errores en caso de que la petición falle
      console.log('Error en la petición:', error);
    });
  }
  if(reason=="isActive"){

    

  // Construir la URL con los parámetros de la petición GET
  var url = 'controller/putClientCustomer.php?customerId=' + encodeURIComponent(customerId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      getClientCustomers('filter',param,value);

 
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
  var url = 'controller/putClientCustomer.php?customerId=' + encodeURIComponent(customerId)  + '&clientId=' + encodeURIComponent(clientId)+ '&param=' + encodeURIComponent(param)+ '&value=' + encodeURIComponent(value);

  // Realizar la petición GET al archivo PHP
  fetch(url)
    .then(response => {
      // Aquí puedes realizar alguna acción con la respuesta del servidor, si lo deseas
      // Por ejemplo, mostrar un mensaje de éxito o actualizar la información en la página

      getMessage();
      
      getClientCustomers('filter',param,value);
       
      
 
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
    console.log(selectedAssignments);
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
    console.log(selectedAssignmentsdes);
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
  console.log(selectedAssignmentselement);
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
  console.log(selectedAssignmentselementbyuser);
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
  console.log(selectedAssignmentselementbyusernot);
}



function csvToJsonPutCatalog(csvData) {
  const lines1 = csvData.split('\n');
  const result1 = [];

  const headers = lines1[0].split(',');
  for (let i = 1; i < lines1.length; i++) {
      const obj1 = {};
      const currentLine = lines1[i].split(',');

      for (let j = 0; j < headers.length; j++) {
          obj1[headers[j]] = currentLine[j];
      }

      const namedObj1 = { "item": obj1 }; // Asignar el nombre "item" al objeto
      result1.push(namedObj1);
  }

  const encodedResult1 = encodeURIComponent(JSON.stringify(result1)); // Convertir a JSON y luego codificar
  var clientIdNow=sessionStorage.getItem('clientNow');
  var url = "controller/putCatalogBulk.php?"+
  "bulk=" + encodedResult1+
  "&clientId=" + encodeURIComponent(clientIdNow);

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
      .then(response => {
          getMessage();
          console.log(encodedResult1);
          return encodedResult1;
      })
      .catch(error => {
          console.log('Error en la petición:', error);
      });
}



function csvToJsonPutProduct(csvData) {
  const lines1 = csvData.split('\n');
  const result1 = [];

  const headers = lines1[0].split(',');
  for (let i = 1; i < lines1.length; i++) {
      const obj1 = {};
      const currentLine = lines1[i].split(',');

      for (let j = 0; j < headers.length; j++) {
          obj1[headers[j]] = currentLine[j];
      }

      const namedObj1 = { "item": obj1 }; // Asignar el nombre "item" al objeto
      result1.push(namedObj1);
  }

  const encodedResult1 = encodeURIComponent(JSON.stringify(result1)); // Convertir a JSON y luego codificar
  var clientIdNow=sessionStorage.getItem('clientNow');
  var url = "controller/putProductBulk.php?"+
  "bulk=" + encodedResult1+
  "&clientId=" + encodeURIComponent(clientIdNow);

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
      .then(response => {
          getMessage();
          console.log(encodedResult1);
          return encodedResult1;
      })
      .catch(error => {
          console.log('Error en la petición:', error);
      });
}


function csvToJsonPutStore(csvData) {
  const lines1 = csvData.split('\n');
  const result1 = [];

  const headers = lines1[0].split(',');
  for (let i = 1; i < lines1.length; i++) {
      const obj1 = {};
      const currentLine = lines1[i].split(',');

      for (let j = 0; j < headers.length; j++) {
          obj1[headers[j]] = currentLine[j];
      }

      const namedObj1 = { "item": obj1 }; // Asignar el nombre "item" al objeto
      result1.push(namedObj1);
  }

  const encodedResult1 = encodeURIComponent(JSON.stringify(result1)); // Convertir a JSON y luego codificar
  var clientIdNow=sessionStorage.getItem('clientNow');
  var url = "controller/putStoreBulk.php?"+
  "bulk=" + encodedResult1+
  "&clientId=" + encodeURIComponent(clientIdNow);

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
      .then(response => {
          getMessage();
          console.log(encodedResult1);
          return encodedResult1;
      })
      .catch(error => {
          console.log('Error en la petición:', error);
      });
}



function csvToJsonPutCategorie(csvData) {
  const lines1 = csvData.split('\n');
  const result1 = [];

  const headers = lines1[0].split(',');
  for (let i = 1; i < lines1.length; i++) {
      const obj1 = {};
      const currentLine = lines1[i].split(',');

      for (let j = 0; j < headers.length; j++) {
          obj1[headers[j]] = currentLine[j];
      }

      const namedObj1 = { "item": obj1 }; // Asignar el nombre "item" al objeto
      result1.push(namedObj1);
  }

  const encodedResult1 = encodeURIComponent(JSON.stringify(result1)); // Convertir a JSON y luego codificar
  var clientIdNow=sessionStorage.getItem('clientNow');
  var url = "controller/putCategorieBulk.php?"+
  "bulk=" + encodedResult1+
  "&clientId=" + encodeURIComponent(clientIdNow);

  // Realizar la solicitud GET utilizando fetch
  fetch(url)
      .then(response => {
          getMessage();
          console.log(encodedResult1);
          return encodedResult1;
      })
      .catch(error => {
          console.log('Error en la petición:', error);
      });
}