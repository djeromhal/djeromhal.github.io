<?
// if (array_key_exists('textF', $_POST)) {
//   mail ("ivankohw@mail.ru",
//         "Заполнена форма ".$_SERVER['HTTP_REFERER'],
//         "Имя: ".$_POST['nameF']."\nE-mail: ".$_POST['contactF']."\nСообщение: ".$_POST['textF']);
//   echo $_POST['nameF'];
// }
if (array_key_exists('telGVR', $_POST)) {
  mail ("ivankohw@mail.ru",
        "Заполнена форма на оформление групповой визы с ".$_SERVER['HTTP_REFERER'],
        "Имя руководителя: ".$_POST['nameGVR']."\nEmail: ".$_POST['contactGVR']."\nТелефон: ".$_POST['telGVR']);
  echo $_POST['nameGVR'];
}
?>