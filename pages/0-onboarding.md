---
title:
layout: 0-default
---


<!-- Trigger Image -->
<img id="myImg" 
     src="../assets/images/desktop-demo.gif" 
     alt="Demonstração responsiva" 
     style="width:100%; max-width:820px; cursor:pointer; border-radius:8px; display:block; margin:20px auto;">

<!-- MODAL FULL SCREEN -->
<div id="myModal" class="full-modal">
  <span class="close-btn">&times;</span>
  <img class="modal-content" id="img01" alt="Demo">
</div>

<style>
.full-modal {
  display: none;
  position: fixed !important;
  z-index: 99999 !important;
  left: 0;
  top: 0;
  width: 100vw !important;
  height: 100vh !important;
  background-color: rgba(0, 0, 0, 0.88) !important;
  align-items: center;
  justify-content: center;
  overflow: auto;
}

.modal-content {
  max-width: 96vw;
  max-height: 94vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.7);
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 35px;
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  cursor: pointer;
  z-index: 100000;
  text-shadow: 0 2px 8px rgba(0,0,0,0.8);
  line-height: 1;
}

.close-btn:hover {
  color: #ff4444;
}
</style>

<script>
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const trigger = document.getElementById("myImg");

trigger.onclick = function() {
  modal.style.display = "flex";
  modalImg.src = this.src;
};

document.querySelector(".close-btn").onclick = function() {
  modal.style.display = "none";
};

// Clique fora da imagem para fechar
modal.addEventListener("click", function(e) {
  if (e.target === modal) modal.style.display = "none";
});

// ESC key
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") modal.style.display = "none";
});
</script>