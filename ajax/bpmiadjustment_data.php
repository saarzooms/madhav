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
				<th>Adjustment Name</th> 
				<th>Credit Score From</th>   
				<th>Credit Score To</th>   
				<th>BPMI</th>        
				<th><center>Action</center></th>  
            </tr>
        </thead>
       <tbody>
<?php
		$sql="select * from bpmi_adjustments";
			foreach ($dbh->query($sql) as $row)
			{
?>				
		<tr>
		<td><?php echo $row['id']; ?></td>
		<td><?php echo $row['adjustmentName']; ?></td>
		<td><?php echo $row['creditScoreFrom']; ?></td>
		<td><?php echo $row['creditScoreTo']; ?></td>
		<td><?php echo $row['bpmi']; ?></td>
		
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
	$sql2 = "SELECT * FROM bpmi_adjustments where id='$id'";
	$result = array();
		foreach ($dbh->query($sql2) as $row2)
			{
				$adjustmentName=$row2['adjustmentName'];
				$creditScoreFrom=$row2['creditScoreFrom'];
				$creditScoreTo=$row2['creditScoreTo'];
				$bpmi=$row2['bpmi'];
				
		}
    array_push($result,$adjustmentName,$creditScoreFrom,$creditScoreTo,$bpmi);
	echo json_encode($result);			
}

}
else if(isset($_REQUEST['name']) && isset($_REQUEST['scorefrom']) && isset($_REQUEST['scoreto']) && isset($_REQUEST['bpmi']) && isset($_REQUEST['custid']))
{
	$name=$_REQUEST['name'];
	$scorefrom=$_REQUEST['scorefrom'];
	$scoreto=$_REQUEST['scoreto'];
	$bpmi=$_REQUEST['bpmi'];
	
	$custid=$_REQUEST['custid'];
	
	$msg="";
	$sql="UPDATE `bpmi_adjustments` SET `adjustmentName`='$name',`creditScoreFrom`='$scorefrom',`creditScoreTo`='$scoreto',`bpmi`='$bpmi' WHERE id='$custid'";
	if($dbh->query($sql))
	{
		$msg="Data Update Successfully";
		echo $msg;
	}
}
?>