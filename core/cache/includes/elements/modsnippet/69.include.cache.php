<?php

class SendMailSmtpClass {

	/**
	* 
	* @var string $smtp_username - логин
	* @var string $smtp_password - пароль
	* @var string $smtp_host - хост
	* @var string $smtp_from - от кого
	* @var integer $smtp_port - порт
	* @var string $smtp_charset - кодировка
	*
	*/   
	public $smtp_username;
	public $smtp_password;
	public $smtp_host;
	public $smtp_from;
	public $smtp_port;
	public $smtp_charset;
	
	public function __construct($smtp_username, $smtp_password, $smtp_host, $smtp_from, $smtp_port = 25, $smtp_charset = "utf-8") {
			$this->smtp_username = $smtp_username;
			$this->smtp_password = $smtp_password;
			$this->smtp_host = $smtp_host;
			$this->smtp_from = $smtp_from;
			$this->smtp_port = $smtp_port;
			$this->smtp_charset = $smtp_charset;
	}
	
	/**
	* Отправка письма
	* 
	* @param string $mailTo - получатель письма
	* @param string $subject - тема письма
	* @param string $message - тело письма
	* @param string $headers - заголовки письма
	*
	* @return bool|string В случаи отправки вернет true, иначе текст ошибки    *
	*/
	function send($mailTo, $subject, $message, $headers) {
			$contentMail = "Date: " . date("D, d M Y H:i:s") . " UT\r\n";
			$contentMail .= 'Subject: =?' . $this->smtp_charset . '?B?'  . base64_encode($subject) . "=?=\r\n";
			$contentMail .= $headers . "\r\n";
			$contentMail .= $message . "\r\n";
			
			try {
					if(!$socket = @fsockopen($this->smtp_host, $this->smtp_port, $errorNumber, $errorDescription, 30)){
							throw new Exception($errorNumber.".".$errorDescription);
					}
					if (!$this->_parseServer($socket, "220")){
							throw new Exception('Connection error');
					}
		
		$server_name = $_SERVER["SERVER_NAME"];
					fputs($socket, "HELO $server_name\r\n");
					if (!$this->_parseServer($socket, "250")) {
							fclose($socket);
							throw new Exception('Error of command sending: HELO');
					}
					
					fputs($socket, "AUTH LOGIN\r\n");
					if (!$this->_parseServer($socket, "334")) {
							fclose($socket);
							throw new Exception('Autorization error');
					}
		
		
					
					fputs($socket, base64_encode($this->smtp_username) . "\r\n");
					if (!$this->_parseServer($socket, "334")) {
							fclose($socket);
							throw new Exception('Autorization error');
					}
					
					fputs($socket, base64_encode($this->smtp_password) . "\r\n");
					if (!$this->_parseServer($socket, "235")) {
							fclose($socket);
							throw new Exception('Autorization error');
					}
		
					fputs($socket, "MAIL FROM: <".$this->smtp_username.">\r\n");
					if (!$this->_parseServer($socket, "250")) {
							fclose($socket);
							throw new Exception('Error of command sending: MAIL FROM');
					}
					
		$mailTo = ltrim($mailTo, '<');
		$mailTo = rtrim($mailTo, '>');
					fputs($socket, "RCPT TO: <" . $mailTo . ">\r\n");     
					if (!$this->_parseServer($socket, "250")) {
							fclose($socket);
							throw new Exception('Error of command sending: RCPT TO');
					}
					
					fputs($socket, "DATA\r\n");     
					if (!$this->_parseServer($socket, "354")) {
							fclose($socket);
							throw new Exception('Error of command sending: DATA');
					}
					
					fputs($socket, $contentMail."\r\n.\r\n");
					if (!$this->_parseServer($socket, "250")) {
							fclose($socket);
							throw new Exception("E-mail didn't sent");
					}
					
					fputs($socket, "QUIT\r\n");
					fclose($socket);
			} catch (Exception $e) {
					return  $e->getMessage();
			}
			return true;
	}
	
	private function _parseServer($socket, $response) {
			while (@substr($responseServer, 3, 1) != ' ') {
					if (!($responseServer = fgets($socket, 256))) {
							return false;
					}
			}
			if (!(substr($responseServer, 0, 3) == $response)) {
					return false;
			}
			return true;
			
	}
}

define('mailto','charset.test@gmail.com,kristall.septic@gmail.com');
define('smtp_from_email_name','InfoCenter Kristall Septic');
define('smtp_from_email_login','info.kristall-septic@ya.ru');
define('smtp_from_email_password','SFS@2fssfwrsfqfq');
define('smtp_from_email_server','ssl://smtp.yandex.ru');
define('smtp_from_email_port',465);

define('bid_subject','Заявка на обработку заказа');
define('bid_message_ok','<p class="ok">Спасибо, ваша заявка принята, и поступила в обработку</p>');


define('from_email_name','InfoCenter Kristall Septic');
define('from_email_login','info.kristall-septic@ya.ru');
define('from_email_password','SFS@2fssfwrsfqfq');
define('from_email_server','ssl://smtp.yandex.ru');
define('from_email_port',465);
function smtp_ssl_send_file($to,$subject,$message,$file){
	$mailSMTP = new SendMailSmtpClass(from_email_login,from_email_password,from_email_server,from_email_name,from_email_port);
	if(is_uploaded_file($file['tmp_name'])){//С вложением
		$filename=$file['tmp_name'];
		$filename_to_messsage=$file['name'];
		$un = strtoupper(uniqid(time()));
		$subject='=?utf-8?B?'.base64_encode($subject).'?=';
		$f = fopen($filename,"rb");
		$head = "From: ".from_email_name." <".from_email_login.">\n";
		$head .= "To: $to\n";
		$head .= "Subject: $subject\n";
		$head .= "Reply-To: ".from_email_name." <".from_email_login.">\n";
		$head .= "Mime-Version: 1.0\n";
		$head .= "Content-Type:multipart/mixed;";
		$head .= "boundary=\"----------".$un."\"\n\n";
		$zag = "------------".$un."\nContent-Type:text/html; charset=utf-8 \n";
		$zag .= "Content-Transfer-Encoding: 8bit\n\n$message\n\n";
		$zag .= "------------".$un."\n";
		$zag .= "Content-Type: application/octet-stream;";
		$zag .= "name=\"".basename($filename_to_messsage)."\"\n";
		$zag .= "Content-Transfer-Encoding:base64\n";
		$zag .= "Content-Disposition:attachment;";
		$zag .= "filename=\"".basename($filename_to_messsage)."\"\n\n";
		$zag .= chunk_split(base64_encode(fread($f,filesize($filename))))."\n";
	}else{//Без вложения
		$head= "MIME-Version: 1.0\r\n";
		$head .= "Content-type: text/html; charset=utf-8\r\n";
		$head .= "From: ".from_email_name." <".from_email_login.">\r\n";
		$head .= "To: $to\n";
		$head .= "Subject: $subject\n";
		$head .= "Reply-To: ".from_email_name." <".from_email_login.">\n";
		$zag=$message;
	}
	$arr_to=explode(',', $to);
	$result=0;
	foreach($arr_to as $k=>$v){
		if($mailSMTP->send(trim($v),$subject,$zag,$head))$result++;
	}
	/*if($result>0){echo "Письмо успешно отправлено в количесте $result шт.";}
		else{echo "Письмо не отправлено. Ошибка: ".$result;}*/
	return 1;
}
function smtp_ssl_send_many_files($to,$subject,$message,$file){
	$mailSMTP=new SendMailSmtpClass(smtp_from_email_login,smtp_from_email_password,smtp_from_email_server,smtp_from_email_name,smtp_from_email_port);
	if(isset($file)){//С вложением
		$un = strtoupper(uniqid(time()));
		//$subject='=?utf-8?B?'.base64_encode($subject).'?=';
		$head = "From: ".smtp_from_email_name." <".smtp_from_email_login.">\n";
		$head .= "To: $to\n";
		$head .= "Subject: $subject\n";
		$head .= "Reply-To: ".smtp_from_email_name." <".smtp_from_email_login.">\n";
		$head .= "Mime-Version: 1.0\n";
		$head .= "Content-Type:multipart/mixed;";
		$head .= "boundary=\"----------".$un."\"\n\n";
		$zag = "------------".$un."\nContent-Type:text/html; charset=utf-8 \n";
		$zag .= "Content-Transfer-Encoding: 8bit\n\n$message\n\n";
		//Обрабатываю массив файлов
		for($i=0;$i<count($file);$i++){
			$filename=$file[$i]['tmp_name'];
			echo 'filename:'.$filename.'<br>';
			$path_info = pathinfo($filename);
			$filename_to_messsage=$file[$i]['name'];
			$f = fopen($filename,"rb");
			$zag .= "------------".$un."\n";
			$zag .= "Content-Type: application/octet-stream;";
			$zag .= "name=\"".basename($filename_to_messsage)."\"\n";
			$zag .= "Content-Transfer-Encoding:base64\n";
			$zag .= "Content-Disposition:attachment;";
			$zag .= "filename=\"".$filename_to_messsage."\"\n\n";
			$zag .= chunk_split(base64_encode(fread($f,filesize($filename))))."\n";
			fclose($f);
		}
		//Обрабатываю массив файлов
	}else{//Без вложения
		$head= "MIME-Version: 1.0\r\n";
		$head .= "Content-type: text/html; charset=utf-8\r\n";
		$head .= "From: ".from_email_name." <".from_email_login.">\r\n";
		$head .= "To: $to\n";
		$head .= "Subject: $subject\n";
		$head .= "Reply-To: ".from_email_name." <".from_email_login.">\n";
		$zag=$message;
	}
	$arr_to=explode(',', $to);
	$result=0;
	foreach($arr_to as $k=>$v){
		if($mailSMTP->send(trim($v),$subject,$zag,$head))$result++;
	}
	return 1;
}
if($_POST['type-data']=='get-form-type1'){
	$param['type-data']='send-form-type1';
	$param['target']=$_POST['target'];
	$param['title']='Задайте вопрос прямо сейчас';
	$param['button']='Отправить';
	if($_POST['target']=='callback-sale'){
		$param['title']='Узнайте стоимость сейчас';
		$param['button']='Узнать';
	}
	if($_POST['target']=='callback-discount'){
		$param['title']='Получить скидку 5% при заказе';
		$param['button']='Получить';
	}
	if($_POST['target']=='callback-free-meter'){
		$param['title']='Вызвать замерщика бесплатно';
		$param['button']='Вызвать';
	}
	if($_POST['target']=='callback-ask'){
		$param['title']='Задайте вопрос прямо сейчас';
		$param['button']='Задать';
	}
	if($_POST['target']=='callback-bid-plain'){
		$param['title']='Заказать септик';
		$param['button']='Заказать';
	}
	if($_POST['target']=='callback-coop'){
		$param['title']='Заявка на сотрудничество';
		$param['button']='Отправить';
	}
	if($_POST['target']=='callback-bid'){
		$res=$modx->getObject('modResource',$_POST['product']);
		$pagetitle=$res->get('pagetitle');
		$longtitle=$res->get('longtitle');
		if(trim($longtitle)!='')$name=trim($longtitle);
			else $name=$pagetitle;
		$param['title']='Заказать септик';
		$param['button']='Заказать';
		$param['dop-caption']='<h5>'.$name.'</h5>';
		$param['dop-class']='bid';
		$param['dop-input']='<input type="hidden" name="product" value="'.$_POST['product'].'">';
	}
	echo $modx->getChunk('pp-form-simple',$param);
}
if($_POST['type-data']=='send-form-type1'){
	$param=$_POST;
	$param['ip']=$_SERVER['REMOTE_ADDR'];
	$ok_message='Ваше обращение отправлено!<br>Мы свяжемся с вами в ближайшее время.';
	if($_POST['target']=='callback-sale')$param['title']='Узнайте стоимость сейчас';
	if($_POST['target']=='callback-discount')$param['title']='Получить скидку 5% при заказе';
	if($_POST['target']=='callback-free-meter')$param['title']='Вызвать замерщика бесплатно';
	if($_POST['target']=='callback-ask')$param['title']='Задайте вопрос прямо сейчас';
	if($_POST['target']=='callback-bid-plain')$param['title']='Заказать септик';
	if($_POST['target']=='callback-coop')$param['title']='Заявка на сотрудничество';
	if($_POST['target']=='callback-bid'){
		$res=$modx->getObject('modResource',$_POST['product']);
		$pagetitle=$res->get('pagetitle');
		$longtitle=$res->get('longtitle');
		if(trim($longtitle)!='')$name=trim($longtitle);
			else $name=$pagetitle;
		$param['title']='Заказать септик';
		$param['dop-caption']='<tr><td colspan="2" style="text-align: center;font-size: 2em;">'.$name.'</td></tr>';
		$ok_message='Покупка <span class="name">'.$name.'</span> оформлена';
	}
	$result['error']=0;
	$result['type_data']=$_POST['order'];
	/*if(strlen(trim($_POST['name']))<2){
		$result['error_field'][]='name';
		$result['error_text'].='<p><span class="name">Имя</span> не должно быть меньше 2 символов или быть пустым</p>';
		$result['error']=1;
	}
	if(strlen(trim($_POST['phone']))<2){
		$result['error_field'][]='phone';
		$result['error_text'].='<p><span class="name">Телефон</span> не должно быть пустым</p>';
		$result['error']=1;
	}
	if(!preg_match("/((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}/i", trim($_POST['phone']))){
		$result['error_fields'][]='phone';
		$result['error_text'].='<p><strong>'.trim($_POST['phone']).'</strong> - указанный <span class="name">телефон</span> содержит ошибку</p>';
		$result['error']=1;
	}
	if(!preg_match("/[0-9a-z_\.\-]+@[0-9a-z_\.\-]+\.[a-z]{2,4}/i", $_POST['email'])){
		$result['error_fields'][]='email';
		$result['error_text'].='<p>указанный <span class="name">e-mail</span> содержит ошибку</p>';
		$result['error']=1;
	}*/
	if(strlen(trim($_POST['contact']))<5){
		$result['error_fields'][]='contact';
		$result['error_text'].='<p>Поле телефон или email должно содержать не менее 5ти символов</p>';
		$result['error']=1;
	}
	if($result['error']==0){
		smtp_ssl_send_file(mailto,$param['title'],$modx->getChunk('pp-report-simple',$param),null);
		$result['text']='<div class="vpl-success js-vpl-success">'.$ok_message.'</div>';
		$result['result']=1;
	}else $result['result']=0;
	echo json_encode($result);
}
if($_POST['type-data']=='send-form-type2'){
	$param=$_POST;
	$param['ip']=$_SERVER['REMOTE_ADDR'];
	$param['title']='Заявка на обратный звонок';
	$ok_message='Ваше обращение отправлено!<br>Мы свяжемся с вами в ближайшее время.';
	$result['error']=0;
	$result['type_data']=$_POST['type-data'];
	/*if(strlen(trim($_POST['name']))<2){
		$result['error_field'][]='name';
		$result['error_text'].='<p><span class="name">Имя</span> не должно быть меньше 2 символов или быть пустым</p>';
		$result['error']=1;
	}*/
	if(strlen(trim($_POST['phone']))<2){
		$result['error_field'][]='phone';
		$result['error_text'].='<p><span class="name">Телефон</span> не должно быть пустым</p>';
		$result['error']=1;
	}elseif(!preg_match("/((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}/i", trim($_POST['phone']))){
		$result['error_field'][]='phone';
		$result['error_text'].='<p><strong>'.trim($_POST['phone']).'</strong> - указанный <span class="name">телефон</span> содержит ошибку</p>';
		$result['error']=1;
	}
	/*if(!preg_match("/[0-9a-z_\.\-]+@[0-9a-z_\.\-]+\.[a-z]{2,4}/i", $_POST['email'])){
		$result['error_fields'][]='email';
		$result['error_text'].='<p>указанный <span class="name">e-mail</span> содержит ошибку</p>';
		$result['error']=1;
	}
	if(strlen(trim($_POST['contact']))<5){
		$result['error_fields'][]='contact';
		$result['error_text'].='<p>Поле телефон или email должно содержать не менее 5ти символов</p>';
		$result['error']=1;
	}*/
	if($_POST['did-not-work']!='on'){
		$result['error_field'][]='did-not-work';
		$result['error_text'].='<p>Необходимо согласиться на обработку персональных данных</p>';
		$result['error']=1;
	}
	if($result['error']==0){
		smtp_ssl_send_file(mailto,$param['title'],$modx->getChunk('pp-report-info-form',$param),null);
		$result['text']='<div class="vpl-success js-vpl-success">'.$ok_message.'</div>';
		$result['short_text']='Ваше обращение отправлено!';
		$result['result']=1;
	}else $result['result']=0;
	echo json_encode($result);
}
return;
