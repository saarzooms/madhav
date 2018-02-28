<?php
session_start();
include('../db/connection.php');
if(isset($_REQUEST['id']))
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
				<th>Policy Range From</th> 
				<th>Policy Range To</th>   
				<th>Subtract</th>   
				<th>MultiplyBy</th>   
				<th>Add</th>   
				        
				<th><center>Action</center></th>  
            </tr>
        </thead>
       <tbody>
<?php
		$sql="select * from title_insurance_range";
			foreach ($dbh->query($sql) as $row)
			{
?>				
		<tr>
		<td><?php echo $row['id']; ?></td>
		<td><?php echo $row['policyRangeFrom']; ?></td>
		<td><?php echo $row['policyRangeTo']; ?></td>
		<td><?php echo $row['subtract']; ?></td>
		<td><?php echo $row['multiplyBy']; ?></td>
		<td><?php echo $row['add']; ?></td>
		
		<td><center><button  class="btn_up btn btn-xs btn-danger"  value="<?php echo $row['id']; ?>" >
			<i class="fa fa-edit"></i></button>
		</center></td>
		</tr>

	<?php
}
?>
</tbody>
			</table>
	<?php
}else if(isset($_REQUEST['did2']))
{
$id= $_REQUEST['did2'];
if(isset($id)){
	$sql2 = "SELECT * FROM title_insurance_range where id='$id'";
	$result = array();
		foreach ($dbh->query($sql2) as $row2)
			{
				$policyRangeFrom=$row2['policyRangeFrom'];
				$policyRangeTo=$row2['policyRangeTo'];
				$subtract=$row2['subtract'];
				$multiplyBy=$row2['multiplyBy'];
				$add=$row2['add'];
				
		}
    array_push($result,$policyRangeFrom,$policyRangeTo,$subtract,$multiplyBy,$add);
	echo json_encode($result);			
}

}
else if(isset($_REQUEST['rangefrom']) && isset($_REQUEST['rangeto']) && isset($_REQUEST['sub']) && isset($_REQUEST['mul']) && isset($_REQUEST['add'])&& isset($_REQUEST['custid']))
{
	$rangefrom=$_REQUEST['rangefrom'];
	$rangeto=$_REQUEST['rangeto'];
	$sub=$_REQUEST['sub'];
	$mul=$_REQUEST['mul'];
	$add=$_REQUEST['add'];
	
	$custid=$_REQUEST['custid'];
	
	$msg="";
	$sql="UPDATE `title_insurance_range` SET `policyRangeFrom`='$rangefrom',`policyRangeTo`='$rangeto',`subtract`='$sub',`multiplyBy`='$mul',`add`='$add' WHERE id='$custid'";
	if($dbh->query($sql))
	{
		$msg="Data Update Successfully";
		echo $msg;
	}
}
?>