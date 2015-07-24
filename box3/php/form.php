<?
if (array_key_exists('textF', $_POST)) {
  mail ("ivankohw@mail.ru",
        "Заполнена форма ".$_SERVER['HTTP_REFERER'],
        "Имя: ".$_POST['nameF']."\nE-mail: ".$_POST['contactF']."\nСообщение: ".$_POST['textF']);
  echo $_POST['nameF'];
}
?>