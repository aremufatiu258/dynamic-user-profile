function handleEditProfile() {
   // new Datepicker('#birthday');
   var name = document.getElementById("name").textContent
   var iptName = document.getElementById("ipt-name")
   iptName.value = name

   var email = document.getElementById("email").textContent
   var iptEmail = document.getElementById("ipt-email")
   iptEmail.value = email

   var interests = document.getElementById("interests").textContent
   var iptInterests = document.getElementById("ipt-interests")
   iptInterests.value = interests

   document.getElementById("edit-view").style.display = "block"
   document.getElementById("display-view").style.display = "none"
}

function handleUpdateProfile() {
   var newName = document.getElementById("ipt-name").value
   var name = document.getElementById("name")
   name.textContent = newName

   var newEmail = document.getElementById("ipt-email").value
   var email = document.getElementById("email")
   if (validator.isEmail(newEmail)) {
      email.textContent = newEmail
   } else {
      alert("wrong email format")
   }

   var newInterests = document.getElementById("ipt-interests").value
   var interests = document.getElementById("interests")
   interests.textContent = newInterests


   document.getElementById("edit-view").style.display = "none"
   document.getElementById("display-view").style.display = "block"
}