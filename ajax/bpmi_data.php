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
				<th>ITV From</th>  
				<th>ITV To</th>   
				<th>Credit Score From</th>   
				<th>Credit Score To</th>   
				<th>BPMI</th>   
				<th>Term From</th>   
				<th>Term To</th>     
				<th><center>Action</center></th>  
            </tr>
        </thead>
       <tbody>
<?php
		$sql="select * from bpmi";
			foreach ($dbh->query($sql) as $row)
			{
?>				
		<tr>
		<td><?php echo $row['id']; ?></td>
		<td><?php echo $row['ltvFrom']; ?></td>
		<td><?php echo $row['ltvTo']; ?></td>
		<td><?php echo $row['creditScoreFrom']; ?></td>
		<td><?php echo $row['creditScoreTo']; ?></td>
		<td><?php echo $row['bpmi']; ?></td>
		<td><?php echo $row['termFrom']; ?></td>
		<td><?php echo $row['termTo']; ?></td>
		
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
	$sql2 = "SELECT * FROM bpmi where id='$id'";
	$result = array();
		foreach ($dbh->query($sql2) as $row2)
			{
				$ltvTo=$row2['ltvTo'];
				$ltvFrom=$row2['ltvFrom'];
				$creditScoreFrom=$row2['creditScoreFrom'];
				$creditScoreTo=$row2['creditScoreTo'];
				$bpmi=$row2['bpmi'];
				$termFrom=$row2['termFrom'];
				$termTo=$row2['termTo'];
				//$dt=date("d-m-Y", strtotime($row2['sch_date']));
		}
    array_push($result,$ltvTo,$ltvFrom,$creditScoreFrom,$creditScoreTo,$bpmi,$termFrom,$termTo);
	echo json_encode($result);			
}

}
else if(isset($_REQUEST['itvto']) && isset($_REQUEST['itvfrom']) && isset($_REQUEST['scorefrom']) && isset($_REQUEST['scoreto']) && isset($_REQUEST['bpmi']) && isset($_REQUEST['termfrom']) && isset($_REQUEST['custid']))
{
	$itvto=$_REQUEST['itvto'];
	$itvfrom=$_REQUEST['itvfrom'];
	$scorefrom=$_REQUEST['scorefrom'];
	$scoreto=$_REQUEST['scoreto'];
	$bpmi=$_REQUEST['bpmi'];
	$termfrom=$_REQUEST['termfrom'];
	$termto=isset($_REQUEST['termto']);
	$custid=$_REQUEST['custid'];
	
	$msg="";
	$sql="UPDATE `bpmi` SET `ltvTo`='$itvto',`ltvFrom`='$itvfrom',`creditScoreFrom`='$scorefrom',`creditScoreTo`='$scoreto',`bpmi`='$bpmi',`termFrom`='$termfrom',`termTo`='$termto' WHERE id='$custid'";
	if($dbh->query($sql))
	{
		$msg="Data Update Successfully";
		echo $msg;
	}
}
?>