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
				<th>Name</th>  			
				<th>Email</th>  
				<th>Plan Name</th>   
				<th>Start Date</th>   
				<th>End Date</th>   
				<th>Status</th>   
				
            </tr>
        </thead>
       <tbody>
<?php
		$sql="SELECT lm.name,lm.email,lm.startdate,lm.enddate,lm.status,plan.planname FROM `loanofficer_master` lm inner join plan on plan.id=lm.planid";
			foreach ($dbh->query($sql) as $row)
			{
?>				
		<tr>
		<td><?php echo $row['name']; ?></td>
		<td><?php echo $row['email']; ?></td>
		<td><?php echo $row['planname']; ?></td>
		<td><?php echo $row['startdate']; ?></td>
		<td><?php echo $row['enddate']; ?></td>
		<td><?php echo $row['status']; ?></td>
		
		</tr>

	<?php
}
?>
</tbody>
			</table>
	<?php
}
?>