<?php
include('../db/connection.php');
if(isset($_REQUEST['type']))
{
	$type=$_REQUEST['type'];
	
	$msg="";
	try {
		$sql="INSERT INTO `businesstype_master`(`businesstype_name`) VALUES ('$type')";
		
		if($dbh->query($sql))
		{
			$msg="Data Save Successfully";
			echo $msg;
		}
	}catch(Exception $e) {
	  echo 'Message: ' .$e->getMessage();
	}
}
else if(isset($_REQUEST['id1']))
{	
$id = $_REQUEST['id1']; 
if(isset($id)){
$sql = "DELETE FROM businesstype_master where id='$id'";		
			if($dbh->query($sql))
			{
				$msg1 = "<script>alert('Deleted Successfully');</script>";
			}
			else{
				$msg1 = "<script>alert('Error To Delete Data!!!');</script>";
			}							
}
}
else if(isset($_REQUEST['did2']))
{
$id= $_REQUEST['did2'];
if(isset($id)){
	$sql2 = "SELECT * FROM businesstype_master where id='$id'";
	$result = array();
		foreach ($dbh->query($sql2) as $row2)
			{
				$type=$row2['businesstype_name'];
				
		}
    array_push($result,$type);
	echo json_encode($result);			
}

}
else if(isset($_REQUEST['type1']) && isset($_REQUEST['typeid']) )
{
	$type=$_REQUEST['type1'];
	$typeid=$_REQUEST['typeid'];
	
	
	$msg="";
	$sql="UPDATE `businesstype_master` SET `businesstype_name`='$type' WHERE id='$typeid'";
	if($dbh->query($sql))
	{
		$msg="Data Update Successfully";
		echo $msg;
	}
}
else if(isset($_REQUEST['id']))
{
	?>
	<script>
 var table = $('#example').DataTable( {
	scrollX: true,
	pageLength: 10,
	 fixedHeader: true,
        lengthChange: false,
		order: [[ 0, "asc" ]],
        buttons: [ 'copy', 'excel', 'pdf', 'colvis' ]
    } );
    table.buttons().container()
        .appendTo( '#example_wrapper .col-sm-6:eq(0)' );
	
 /*  $('#example thead th').each( function () {
        var title = $(this).text();
        $(this).html( '<label>'+title+'</label><br><input type="text" placeholder="Search '+title+'" />' );
    } );  */
 
    // DataTable
    var table = $('#example').DataTable();
 
    // Apply the search
    table.columns().every( function () {
        var that = this;
 
        $( 'input', this.header() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
	
</script>
	<table id="example" class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
        <thead>
            <tr>
				<th>Id</th>  			
				<th>Business Type</th>  
				   
				<th><center>Action</center></th>  
            </tr>
        </thead>
       <tbody>
<?php
		$sql = "select * from businesstype_master";
		$officername="";
			foreach ($dbh->query($sql) as $row)
			{
				
?>				
		<tr>
		<td><?php echo $row['id']; ?></td>
		<td><?php echo $row['businesstype_name']; ?></td>
		
		<td><center><button  class="btn_up btn btn-xs btn-danger"  value="<?php echo $row['id']; ?>" >
			<i class="fa fa-edit"></i></button>
			<button class="btn_del btn btn-xs btn-danger" value="<?php echo $row['id']; ?>">
			<i class="fa fa-trash"></i></button></center></td>
		</tr>

	<?php
}
?>
</tbody>
			</table>
	<?php
}
?>