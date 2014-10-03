console.log("====== TRABALHOS =======");


var TRABALHOS = (function(){



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
		  			$("#"+resultado).click(function(){		
		  				$(".trabalhos").remove();		  					
		  				portifa(this.id);	
		  				// console.log(this.id)		  			  						  					  				
		  			});		  				

				}

				// varrendo o XML e colocando os IMAGENS na tela
				
				function portifa(valorDe){
					
					var ControleImagem = 0;
					var numControle = 0; //aqui é para dar um stop no each
					
					$(data).find("conteudo").each(function(){					
							
			  				var imagem = $(this).find("imagem").text();
			  				var id = $(this).find("id").text();
			  				var legenda = $(this).find("legenda").text();

					
						if(ControleImagem >= valorDe){
							if(numControle < 6){
							
				  				var li = "<li class=trabalhos id="+id+"><a class=fancybox rel=group title=" + legenda + " href=img/trabalhos/img_g/"+imagem+" ><img src=img/trabalhos/"+imagem+"></a></li>"
				  				$(li).appendTo("#listaTrabalhos").fadeOut(0).fadeIn();
				  						  				
								numControle++; 
			  				}else{
			  					return false;
			  				}
			  			}ControleImagem++;	
			  			pronto();// essa função está no fancybox.js

	
			  			
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