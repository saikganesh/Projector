	$(document).ready(function(){
	    $.ajax({
	        url: "/movies/all",
	        type: "GET",
	        success: function(result){
	            console.log(result);	
				
				var data="";
				console.log(result);
					var tamil=[],hindi=[],english=[];	
	                for(var i=0; i < result.length; i++){
	                    
	                    if(result[i].language == "Tamil"){
							tamil.push(result[i]);
	                     
	                    }
	                    
	                    else if(result[i].language == "Hindi"){
	                        hindi.push(result[i]);
	                        
	                    }
	                    
	                    else{
	                        english.push(result[i]);
	                      
	                    }
	                    
					}

				data+='<div class="movies"><h2 class="movietype">Tamil</h2>';
					for(var i=0 ; i <tamil.length;i++){
							data += '<a href="/moviedetail.html#'+ tamil[i].name+'"><div class="eachMovie" >';
							data += '<div><img class="movieimg" src="'+tamil[i].posterUrl+'"></div>';
	                        data += '<div class="relyear">'+tamil[i].releaseYear+'</div>';
	                        data += '<div class="name" >'+tamil[i].name+'</div>';
							if (tamil[i].rating == "5"){
								data+='<div class="rating"><img src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img  src="images/star.png"/></div>';
							}
							else if(tamil[i].rating == "4.5"){
								data+='<div class="rating"><img src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img  src="images/star-half.png"/></div>';
							}
							else if(tamil[i].rating == "4"){
								data+='<div class="rating"><img src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img src="images/star-empty.png"/></div>';
								
							}						
							else if(tamil[i].rating == "3.5"){
								data+='<div class="rating"><img src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img  src="images/star-half.png"/>';
								data+='<img src="images/star-empty.png"/></div>';
							}
							else if(tamil[i].rating == "3"){
								data+='<div class="rating"><img src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img src="images/star-empty.png"/>';
								data+='<img src="images/star-empty.png"/></div>';
								
							}
							else if(tamil[i].rating == "2.5"){
								data+='<div class="rating"><img src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img  src="images/star-half.png"/>';
								data+='<img src="images/star-empty.png"/>';
								data+='<img src="images/star-empty.png"/></div>';
							}
							else if(tamil[i].rating == "2"){
								data+='<div class="rating"><img src="images/star.png"/>';
								data+='<img  src="images/star.png"/>';
								data+='<img src="images/star-empty.png"/>';
								data+='<img src="images/star-empty.png"/>';
								data+='<img src="images/star-empty.png"/></div>';
								
							}
							else if(tamil[i].rating == "1.5"){
								data+='<div class="rating"><img src="images/star.png"/>';
								data+='<img  src="images/star-half.png"/>';
								data+='<img src="images/star-empty.png"/>';
								data+='<img src="images/star-empty.png"/>';
								data+='<img src="images/star-empty.png"/></div>';
							}
							else{
								data+='<div class="rating"><img src="images/star.png"/>';
								data+='<img src="images/star-empty.png"/>';
								data+='<img src="images/star-empty.png"/>';
								data+='<img src="images/star-empty.png"/>';
								data+='<img src="images/star-empty.png"/></div>';
							}
							data+='</div></a>';
						}
							data+='</div>';

					data+='<div class="movies"><h2 class="movietype" >Hindi</h2>';
					
					for(var i=0 ; i <hindi.length;i++){
						data += '<a href="/moviedetail.html#' + hindi[i].name + '"><div class="eachMovie">';
						data += '<div><img class="movieimg" src="'+hindi[i].posterUrl+'"></div>';
						data += '<div class="relyear">'+hindi[i].releaseYear+'</div>';
						data += '<div class="name">'+hindi[i].name+'</div>';
						
						if (hindi[i].rating == "5"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/></div>';
						}
						else if(hindi[i].rating == "4.5"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star-half.png"/></div>';
						}
						else if(hindi[i].rating == "4"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
							
						}						
						else if(hindi[i].rating == "3.5"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star-half.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
						}
						else if(hindi[i].rating == "3"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
							
						}
						else if(hindi[i].rating == "2.5"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star-half.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
						}
						else if(hindi[i].rating == "2"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
							
						}
						else if(hindi[i].rating == "1.5"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star-half.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
						}
						else{
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
						}
						data+='</div></a>';
					}	
					data += '</div>';

					data+='<div class="movies"><h2 class="movietype" >English</h2>';
					
					for(var i=0 ; i <english.length;i++){
						data += '<a href="/moviedetail.html#' + english[i].name + '"><div class="eachMovie">';
						data += '<div><img class="movieimg" src="'+english[i].posterUrl+'"></div>';
						data += '<div class="relyear">'+english[i].releaseYear+'</div>';
						data += '<div class="name">'+english[i].name+'</div>';
						
						if (english[i].rating == "5"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/></div>';
						}
						else if(english[i].rating == "4.5"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star-half.png"/></div>';
						}
						else if(english[i].rating == "4"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
							
						}						
						else if(english[i].rating == "3.5"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star-half.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
						}
						else if(english[i].rating == "3"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
							
						}
						else if(english[i].rating == "2.5"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img  src="images/star-half.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
						}
						else if(english[i].rating == "2"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
							
						}
						else if(english[i].rating == "1.5"){
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img  src="images/star-half.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
						}
						else{
							data+='<div class="rating"><img src="images/star.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/>';
							data+='<img src="images/star-empty.png"/></div>';
						}
						data+='</div></a>';
					}
					data += '</div>';

				$("#mainContent").html(data);
				}
			});
	});





























































































































































































































































































































































































































































































































































































































































































































































