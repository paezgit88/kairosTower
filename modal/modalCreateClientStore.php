

<!-- Modal -->
<div class="modal fade" id="clientStoreCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #001219; color: #C70039;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="public/KAIROS2.png" alt="LUGMA" width="30" height="30" style="background-color: #001219; color: #C70039;">Crear elemento</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModClientStoreCreate()"></button>
      </div>
      <div class="modal-body">
     <?php 
     require_once 'layout/formCreateStores.php';
     ?>
</div>



      </div>
     
    </div>
  </div>
</div>




<script>
function openModClientStoreCreate() {
  var myModal = new bootstrap.Modal(document.getElementById('clientStoreCreate'));
  myModal.show();
}


function closeModClientStoreCreate() {
  var myModal = new bootstrap.Modal(document.getElementById('clientStoreCreate'));
  myModal.hide();
  
}
</script>