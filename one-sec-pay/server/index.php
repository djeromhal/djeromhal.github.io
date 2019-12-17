<?
    header("Access-Control-Allow-Origin: *");

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    /* получатели */
    $to= "Mikhail <mikhailivanko@gmail.com>";

    /* тема/subject */
    $subject = "Mail sent";

    /* сообщение */
    $message = '
    <html>
    <head>
    <title>Mail sent</title>
    </head>
    <body>
    <table>
    <tr>
    <th>'.$name.'</th>
    </tr>
    <tr>
    <td>'.$email.'</td>
    </tr>
    <tr>
    <td>'.$phone.'</td>
    </tr>
    </table>
    </body>
    </html>
    ';

    /* Для отправки HTML-почты вы можете установить шапку Content-type. */
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

    /* и теперь отправим из */
    mail($to, $subject, $message, $headers);

    echo json_encode(array('mail'=>'sent'));

?>