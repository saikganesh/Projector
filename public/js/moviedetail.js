$(document).ready(function(){
	   var pageUrl= window.location.href;
	   var name= pageUrl.substring(pageUrl.indexOf('#')+1);
	   console.log("name",name);
	   var detail="";

	    $.ajax({
	        url: "/movies/"+name,
	        type: "GET",
	        success: function(result){
	            console.log(result);
	            res=result[0];

	            				detail+='<div class="mname"><h1>'+ res.name+ '</h1></div>';
	            			if (res.rating == "5"){
								detail+='<div class="rating"><img src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img  src="images/star.png"/></div>';
							}
							else if(res.rating == "4.5"){
								detail+='<div class="rating"><img src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img  src="images/star-half.png"/></div>';
							}
							else if(res.rating == "4"){
								detail+='<div class="rating"><img src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img src="images/star-empty.png"/></div>';
								
							}						
							else if(res.rating == "3.5"){
								detail+='<div class="rating"><img src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img  src="images/star-half.png"/>';
								detail+='<img src="images/star-empty.png"/></div>';
							}
							else if(res.rating == "3"){
								detail+='<div class="rating"><img src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img src="images/star-empty.png"/>';
								detail+='<img src="images/star-empty.png"/></div>';
								
							}
							else if(res.rating == "2.5"){
								detail+='<div class="rating"><img src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img  src="images/star-half.png"/>';
								detail+='<img src="images/star-empty.png"/>';
								detail+='<img src="images/star-empty.png"/></div>';
							}
							else if(res.rating == "2"){
								detail+='<div class="rating"><img src="images/star.png"/>';
								detail+='<img  src="images/star.png"/>';
								detail+='<img src="images/star-empty.png"/>';
								detail+='<img src="images/star-empty.png"/>';
								detail+='<img src="images/star-empty.png"/></div>';
								
							}
							else if(res.rating == "1.5"){
								detail+='<div class="rating"><img src="images/star.png"/>';
								detail+='<img  src="images/star-half.png"/>';
								detail+='<img src="images/star-empty.png"/>';
								detail+='<img src="images/star-empty.png"/>';
								detail+='<img src="images/star-empty.png"/></div>';
							}
							else{
								detail+='<div class="rating"><img src="images/star.png"/>';
								detail+='<img src="images/star-empty.png"/>';
								detail+='<img src="images/star-empty.png"/>';
								detail+='<img src="images/star-empty.png"/>';
								detail+='<img src="images/star-empty.png"/></div>';
							}
								detail += '<div class ="imgdiv"><img class="movieimg" src="'+res.posterUrl+'"></div>';
								detail += '<div class="relyear">'+res.releaseYear+'</div>';
								detail += '<div class="language">'+res.language+'</div>';
								detail +='<div class="plot"><h1>PLOT</h1><p>'+res.plot+'</p></div>';
								var eachname = "";
								var vector = [];
								var str = res.cast;
								for(var i=0; i< str.length ; i++)
								{
									if(str.charAt(i)!=',')
									{
										eachname += str.charAt(i);
									}
									else
									{
										vector.push(eachname);
										eachname = "";
									}
								}
								detail +='<div class="cast"><h1>CAST</h1><ul>';
								
								for(var i=0 ; i<vector.length ; i++)
								{
									detail += '<li>' + vector[i] + '</li>';
								}
								detail += '</ul></div>';

								


							$("#moviedetail").html(detail);

						}
					});
	});




