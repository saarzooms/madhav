<?php
session_start();
include('../db/connection.php');
include('../stripe/config.php');

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
				<th>Plan Name</th>  
				<th>Plan Amount</th>   
				<th>Plan Start Validity</th>   
				<th>Plan End Validity</th>   
				<th>Signup Amount</th>   
				
            </tr>
        </thead>
       <tbody>
<?php
		$sql="select * from plan";
			foreach ($dbh->query($sql) as $row)
			{
?>				
		<tr>
		<td><?php echo $row['id']; ?></td>
		<td><?php echo $row['planname']; ?></td>
		<td><?php echo $row['planamount']; ?></td>
		<td><?php echo $row['planstartdate']; ?></td>
		<td><?php echo $row['planenddate']; ?></td>
		<td><?php echo $row['signupamount']; ?></td>
		
		</tr>

	<?php
}
?>
</tbody>
			</table>
	<?php
}
else if(isset($_REQUEST['planname']) && isset($_REQUEST['planamount']) && isset($_REQUEST['planstartdate']) && isset($_REQUEST['signupamount']))
{
	$planname=$_REQUEST['planname'];
	$planamount=$_REQUEST['planamount'];
	$planstartdate=date('Y-m-d',strtotime($_REQUEST['planstartdate']));
	$planenddate='0000-00-00';
	$signupamount=$_REQUEST['signupamount'];
	
	//file_put_contents('./log_'.date("j.n.Y").'.txt', $state.$zipcode, FILE_APPEND);
	$msg="";$count=0;
	try {
		$sql="select count(*) as cnt from plan where planname='$planname'";
		foreach($dbh->query($sql) as $r){
			$count=$r['cnt'];
		}
		if($count == 1){
			echo 'NA';
		}else{
			$sql1="INSERT INTO `plan`(`planname`, `planamount`, `planstartdate`, `planenddate`, `signupamount`) 
			VALUES ('$planname','$planamount','$planstartdate','$planenddate','$signupamount')";
			if($dbh->query($sql1))
			{
				$id = $dbh->lastInsertId();
				$id--;
				if($id != 0){
					$sql2="update plan set planenddate='$planstartdate' where id='$id'";
					if($dbh->query($sql2)){
						//echo 'Plan Data Save Successfully !!!';
					}
				}		try {
								$plan=Stripe_Plan::create(array(
								  "amount" => $planamount,
								  "interval" => "month",
								  "name" => $planname,
								  "currency" => "usd",
								  "id" => $planname
							     ));
								 //echo $plan->id;
								 echo 'Plan Data Save Successfully !!!';
						}catch (Stripe_InvalidRequestError $e) {
							$result = "declined";
							echo $result;
						} catch (Stripe_AuthenticationError $e) {
							$result = "declined";
							echo $result;
						} catch (Stripe_ApiConnectionError $e) {
							$result = "declined";
							echo $result;
						} catch (Stripe_Error $e) {
							$result = "declined";
							echo $result;
						} 
						
					//}
				//}
				
				//echo "Plan Data Save Successfully !!!";
			}
		}
		
	}catch(Exception $e) {
	  echo 'Message: ' .$e->getMessage();
	}
}