//Progress Report in Safety Incidents Today Code Start
$(document).ready()
{
	//$("#local_purchase").hide();
	//$("#pre_planned").hide();
	$(document).on("change","#saf_inc",function(e)
	{
		var y = $('input[name=saf_inc]:checked').val();
		if(y=='1')
		{
			$("#safety_incidents").show();
		}
		else
		{
			$("#safety_incidents").hide();
		}
	});
	$(document).on("change","#material_class",function(e)
	{
		
		var y = $('#material_class').val();
		if(y=='1')
		{
			$("#pre_planned").show();
			$("#local_purchase").hide();
		}
		else if(y=='2')
		{
			$("#local_purchase").show();
			$("#pre_planned").hide();
		}
		else 
		{
			$("#local_purchase").hide();
			$("#pre_planned").hide();
		}

		
	});
}
//Progress Report in Safety Incidents Today Code Stop

