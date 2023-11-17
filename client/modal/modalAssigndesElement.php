

<!-- Modal -->
<div class="modal fade" id="asElement" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-l">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #<?php echo $_SESSION['bgColor'];?>; color: #<?php echo $_SESSION['txtColor'];?>;">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><img src="<?php echo $_SESSION['imgIcon'];?>" alt="LUGMA" width="30" height="30" style="background-color: #<?php echo $_SESSION['bgColor'];?>; color: #<?php echo $_SESSION['txtColor'];?>;">Elementos requeridos</h1>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" onclick="closeModAssigndesElement();"></button>
      </div>
      <div class="modal-body">
     <?php 
     require_once '../layout/formAssignElementdes.php';
     ?>
</div>



      </div>
     
    </div>
  </div>
</div>




<script>
function openModAssigndesElement() {
  var myModal = new bootstrap.Modal(document.getElementById('asElement'));
  myModal.show();
}


function closeModAssigndesElement() {
  var myModal = new bootstrap.Modal(document.getElementById('asElement'));
  myModal.hide();
  
}
</script>