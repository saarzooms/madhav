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
				<th>Policies UpTo And Including</th> 
				<th>Basic Premium</th>   
				        
				<th><center>Action</center></th>  
            </tr>
        </thead>
       <tbody>
<?php
		$sql="select * from title_insurance_basic_premium_rates";
			foreach ($dbh->query($sql) as $row)
			{
?>				
		<tr>
		<td><?php echo $row['id']; ?></td>
		<td><?php echo $row['policiesUpToAndIncluding']; ?></td>
		<td><?php echo $row['basicPremium']; ?></td>
		
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
	$sql2 = "SELECT * FROM title_insurance_basic_premium_rates where id='$id'";
	$result = array();
		foreach ($dbh->query($sql2) as $row2)
			{
				$policiesUpToAndIncluding=$row2['policiesUpToAndIncluding'];
				$basicPremium=$row2['basicPremium'];
				
		}
    array_push($result,$policiesUpToAndIncluding,$basicPremium);
	echo json_encode($result);			
}

}
else if(isset($_REQUEST['policies']) && isset($_REQUEST['basic']) && isset($_REQUEST['custid']))
{
	$policies=$_REQUEST['policies'];
	$basic=$_REQUEST['basic'];
	
	$custid=$_REQUEST['custid'];
	
	$msg="";
	$sql="UPDATE `title_insurance_basic_premium_rates` SET `policiesUpToAndIncluding`='$policies',`basicPremium`='$basic' WHERE id='$custid'";
	if($dbh->query($sql))
	{
		$msg="Data Update Successfully";
		echo $msg;
	}
}
?>