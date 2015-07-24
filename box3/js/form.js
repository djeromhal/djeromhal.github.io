  document.getElementById('feedback-form').onsubmit = function(){
    var http = new XMLHttpRequest();
    http.open("POST", "php/form.php", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send("nameF=" + this.nameF.value + "&contactF=" + this.contactF.value + "&textF=" + this.textF.value);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в ближайшее время.\nБлагодарим за проявленный интерес!');
      }
    }
    http.onerror = function() {
      alert('Извините, данные не были переданы');
    };
    return false;
  };