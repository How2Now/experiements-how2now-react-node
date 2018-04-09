<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse CC 2018.1.0.386
*/

require_once('form_process.php');

$form = array(
	'subject' => 'Contact Form Submission',
	'heading' => 'New Form Submission',
	'success_redirect' => '',
	'resources' => array(
		'checkbox_checked' => 'Checked',
		'checkbox_unchecked' => 'Unchecked',
		'submitted_from' => 'Form submitted from website: %s',
		'submitted_by' => 'Visitor IP address: %s',
		'too_many_submissions' => 'Too many recent submissions from this IP',
		'failed_to_send_email' => 'Failed to send email',
		'invalid_reCAPTCHA_private_key' => 'Invalid reCAPTCHA private key.',
		'invalid_reCAPTCHA2_private_key' => 'Invalid reCAPTCHA 2.0 private key.',
		'invalid_reCAPTCHA2_server_response' => 'Invalid reCAPTCHA 2.0 server response.',
		'invalid_field_type' => 'Unknown field type \'%s\'.',
		'invalid_form_config' => 'Field \'%s\' has an invalid configuration.',
		'unknown_method' => 'Unknown server request method'
	),
	'email' => array(
		'from' => 'toussaint530@live.com',
		'to' => 'toussaint530@live.com'
	),
	'fields' => array(
		'custom_U182923' => array(
			'order' => 1,
			'type' => 'string',
			'label' => 'Name',
			'required' => false,
			'errors' => array(
			)
		),
		'Email' => array(
			'order' => 2,
			'type' => 'email',
			'label' => 'Email',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Email\' is required.',
				'format' => 'Field \'Email\' has an invalid email.'
			)
		),
		'custom_U182913' => array(
			'order' => 3,
			'type' => 'string',
			'label' => 'Message',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Message\' is required.'
			)
		),
		'custom_U182996' => array(
			'order' => 4,
			'type' => 'string',
			'label' => 'Cell Phone',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U183058' => array(
			'order' => 5,
			'type' => 'radiogroup',
			'label' => 'Are you a current student or professional tutor?',
			'required' => true,
			'optionItems' => array(
				'Current Student',
				'Professional Tutor'
			),
			'errors' => array(
				'required' => 'Field \'Are you a current student or professional tutor?\' is required.',
				'format' => 'Field \'Are you a current student or professional tutor?\' has an invalid value.'
			)
		)
	)
);

process_form($form);
?>