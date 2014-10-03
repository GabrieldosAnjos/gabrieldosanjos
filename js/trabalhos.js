console.log("====== TRABALHOS =======");


var TRABALHOS = (function(){

// ======================  Leitura da GALERIA ADICIONAL 
	function consultaImagens(valorConsulta){
		$.ajax({
			url:"http://localhost/gabrieldosanjos/xml/galeria_nova_adicional.xml", 
			dataType:"xml",
			type:"GET",

			success:function(dataAdicional){ 
											
				$(dataAdicional).find("conteudo").each(function(){
					var id = $(this).find("id").text();
					var imagem = $(this).find("imagem").text();
					var link = "<a class=fancybox rel="+id+" href=img/trabalhos/img_g/"+imagem+" ></a>"

						if(valorConsulta == id){
							// console.log("passou")
							$(link).appendTo("#listaTrabalhos")
							// console.log(id, imagem);
						}	
					});
							
				// consultaImagens(4);				
				
			},
			error:function(dataAdicional){
				console.log("erro");
			}

		})
	}		


// ======================  Leitura da GALERIA PRINCIPAL ------- numeração da paginação

	$.ajax({
			url:"http://localhost/gabrieldosanjos/xml/galeria_nova.xml",
			dataType:"xml",
			type: "GET",
			
			success:function(data){
				
				var contador = 0; // aqui é para contar o tamanho do XML
				var numeracao = 0; // variável de controle do ID das li
				
				// Contando o tamanho do XML

				$(data).find("conteudo").each(function(){	
					contador++;
				});
				
				var divide = contador / 5;
				
				for(var i = 1 ; i < divide ; i++){

					var resultado = (i - 1) * 6;
					
					var liPaginacao = "<li id="+resultado+" class=numeros><a href=#><img src=img/numeracao"+i+".png></a></li>"
						
		  			$(liPaginacao).appendTo("#numeroPagina")

		  			if(resultado <= 0){
		  				$("#numeroPagina li").removeClass("numeros")
		  			}
		  			
		  			$("#"+resultado).click(function(){	
		  				// $(this).removeClass("numeros").addClass("numeros")	
		  				$(".trabalhos").remove();
		  				limpaNumeros(this);		  					
		  				portifa(this.id);	  			  						  					  				
		  			});		  				

				}

				function limpaNumeros(linha){
					$("#numeroPagina li").addClass("numeros");
					$(linha).removeClass("numeros");
				}

				// varrendo o XML e colocando os IMAGENS na tela
				
				function portifa(valorDe, linha){
								
					// $("#numeroPagina li").addClass("numeros");
					// $(linha).removeClass("numeros");


					var ControleImagem = 0;
					var numControle = 0; //aqui é para dar um stop no each
					
					$(data).find("conteudo").each(function(){					
							
			  				var imagem = $(this).find("imagem").text();
			  				var id = $(this).find("id").text();
			  				var legenda = $(this).find("legenda").text();
					
						if(ControleImagem >= valorDe){
							if(numControle < 6){

				  				var li = "<li class=trabalhos id="+id+"><a class=fancybox rel="+id+" title=" + legenda + " href=img/trabalhos/img_g/"+imagem+" ><img src=img/trabalhos/"+imagem+"></a></li>"
				  				consultaImagens(id);

				  				$(li).appendTo("#listaTrabalhos")
				  				.fadeOut(0)
				  				.fadeIn()
				  								  				
								numControle++; 
			  				}else{
			  					return false;
			  				}
			  			}ControleImagem++;	
			  			pronto();
	
			  			
	   				});

				}

				portifa(0);

			},
			error:function(data){
				console.log("erro");
			}

		});

});

TRABALHOS();