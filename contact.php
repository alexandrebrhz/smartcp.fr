<?php
declare(strict_types=1);
$recipient = 'alexandre@smartcp.fr';
$siteName = 'SMART Conseil & Performance';
function clean_header(string $v, int $max=180): string { $v=trim(strip_tags($v)); $v=str_replace(["\r","\n"],' ',$v); return mb_substr($v,0,$max); }
function clean_text(string $v, int $max=4000): string { $v=trim(strip_tags($v)); $v=preg_replace('/[\r\n]+/',"\n",$v); return mb_substr($v,0,$max); }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Location: contact.html', true, 303); exit; }
if (!empty($_POST['website'] ?? '')) { header('Location: merci.html', true, 303); exit; }
$name=clean_header($_POST['name']??''); $company=clean_header($_POST['company']??''); $email=clean_header($_POST['email']??''); $phone=clean_header($_POST['phone']??''); $employees=clean_header($_POST['employees']??''); $topic=clean_header($_POST['topic']??''); $message=clean_text($_POST['message']??''); $consent=isset($_POST['consent']);
if ($name==='' || $email==='' || $message==='' || !$consent || !filter_var($email,FILTER_VALIDATE_EMAIL)) { header('Location: erreur.html', true, 303); exit; }
$subject='Nouvelle demande SMART C&P — '.($company!==''?$company:$name);
$body="Nouvelle demande depuis smartcp.fr\n\nNom : $name\nSociété : ".($company?:'Non renseigné')."\nEmail : $email\nTéléphone : ".($phone?:'Non renseigné')."\nTaille : ".($employees?:'Non renseigné')."\nSujet : ".($topic?:'Non renseigné')."\n\nMessage :\n$message\n\nConsentement RGPD : oui\nDate : ".date('Y-m-d H:i:s')."\n";
$headers=['From: '.$siteName.' <no-reply@smartcp.fr>','Reply-To: '.$name.' <'.$email.'>','Content-Type: text/plain; charset=UTF-8','X-Mailer: PHP/'.phpversion()];
$sent=mail($recipient,'=?UTF-8?B?'.base64_encode($subject).'?=',$body,implode("\r\n",$headers));
header('Location: '.($sent?'merci.html':'erreur.html'), true, 303); exit;
