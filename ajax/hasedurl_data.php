<?php
session_start();
include('../db/connection.php');
if(isset($_REQUEST['url']))
{
	$link=$_REQUEST['url'];
	/* $maxid=0;
	$s="select max(id) as instance_id from url_master";
	foreach($dbh->query($s) as $row2)
	{
		$maxid=$row2['instance_id'];
		// file_put_contents('./log_'.date("j.n.Y").'.txt', $maxid, FILE_APPEND);
	}
	$maxid=$maxid+1;
	$url=$link."#/loan-calculator/".$maxid; */
	
	//$url=$link."#/loan-calculator/".$_SESSION['id'];
	$url=$link.$_SESSION['id'];
	
	$key=rand(10000,99999);
    $shorturl=base_convert($key,20,36);
	$msg="";
	try {
		$sql="INSERT INTO `url_master`(`loanofficer_id`, `url`, `shorturl`) VALUES ('".$_SESSION['id']."','$url','$shorturl')";
		
		if($dbh->query($sql))
		{
			$msg="Url Generate Successfully";
			echo $msg;
		}
	}catch(Exception $e) {
	  echo 'Message: ' .$e->getMessage();
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
			<!--	<th>Url</th>  -->
				<th>Hased Url</th>  
				   
				<!--<th><center>Action</center></th>  -->
            </tr>
        </thead>
       <tbody>
<?php
		$sql = "select * from url_master where loanofficer_id='".$_SESSION['id']."'";
		$officername="";
			foreach ($dbh->query($sql) as $row)
			{
				$uri=explode('//',$row['url']);
				$add=explode('/',$uri[1]);
?>				
		<tr>
		<td><?php echo $row['id']; ?></td>
	<!--	<td><?php //echo $row['url']; ?></td> -->
		<!--<td><a href="ajax/decoder.php" target="_blank">http://loan-calculator.xcartadesigns.com/<?php //echo $row['shorturl']?></a></td>-->
		<td><a href="<?php echo $row['shorturl'];?>" target="_blank"><?php echo $add[0].'/material/'.$row['shorturl'];?></a></td>
		
		</tr>

	<?php
}
?>
</tbody>
			</table>
	<?php
}
?>