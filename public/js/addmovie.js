function addMovie()
{
	$.ajax({
		url: "/movies/add",
		type:'post',
		dataType:'json',
		data: $("#Add_Movie_Form").serialize(),
		success: function(response)
		{
			if(response){
				window.location.href="index.html";
			}

		},
		error: function(response){
			console.log("error"+response);
		}	





	});


}