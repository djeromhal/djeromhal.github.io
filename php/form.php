<?
if (array_key_exists('contactF', $_POST)) {
  mail ("ivankohw@mail.ru",
        "Заполнена форма ".$_SERVER['HTTP_REFERER'],
        "Имя: ".$_POST['nameF']."\nE-mail: ".$_POST['contactF']);
  echo $_POST['nameF'];
}
?>