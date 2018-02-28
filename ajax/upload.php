<?php

if(is_array($_FILES)) {

if(isset($_FILES['uploadFile']['name'])) {
// Number of uploaded files
$num_files = count($_FILES['uploadFile']['name']);
//echo "<script>alert('".$num_files."');</script>";
$str='';
			for($i=0; $i < $num_files;$i++)
				{	
			  
				$file_name = $_FILES['uploadFile']['name'][$i];
				if($i==0){
					$str=$file_name;
				}
				else{
					$str=$str.','.$file_name;
				}
				
				$file_size =$_FILES['uploadFile']['size'][$i];
				$file_tmp =$_FILES['uploadFile']['tmp_name'][$i];
				$file_type=$_FILES['uploadFile']['type'][$i];
					//$dirPath = 'D:/upload/'.$reg;
					//$dirPath = $_SERVER['DOCUMENT_ROOT'].'/material/images/photo';
					$dirPath = '../images/photo';
                    //$result = mkdir($dirPath);

					move_uploaded_file($file_tmp,$dirPath.'/'.$file_name);		
		}
                   if($file_name == ""){
						echo "Please select file to upload !!!";
					}
					else{
						//echo "File upload successfully";
						echo 'images/photo/'.$file_name;
						
					}
}
}
?>