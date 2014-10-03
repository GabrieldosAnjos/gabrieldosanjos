<%

Nome = Request.form("nome")
Email = Request.form("email")
Msg = Request.form("msg")

'Declaramos as v�riaveis a serem utilizadas no script
Dim AspEmail, nomeRemetente, emailRemetente, nomeDestinatario, emailDestinatario, emailRetorno, assunto, mensagem, servidor
 
'Configuramos os dados a serem utilizados no cabe�alho da mensagem
nomeDestinatario="Arte do Gueto"
emailDestinatario="contato@artedogueto.com.br"
nomeRemetente="Site gabrieldosanjos.com.br"
emailRemetente="contato@artedogueto.com.br" 'O endere�o de e-mail deve ser preenchido com uma conta existente em seu pr�prio dom�nio.
emailRetorno=""&Email&""
responderPara="webmaster@SeuDominio"
assunto="Contato site"
mensagem="<b>Nome:</b> "&Nome&"<br> <b>e-mail:</b> "&Email&"<br> <b>Mensagem:</b> "&Msg&""
servidor="localhost"
 
'Agora configuramos o componente utilizando os dados informados nas vari�veis
 
'Instancia o objeto na mem�ria
SET AspEmail = Server.CreateObject("Persits.MailSender")
 
'Contfigura o servidor SMTP a ser utilizado
AspEmail.Host = servidor
 
'Configura o Nome do remetente da mensagem
AspEmail.FromName = nomeRemetente
 
'Configura o e-mail do remetente da mensagem que OBRIGATORIAMENTE deve ser um e-mail do seu pr�prio dom�nio
AspEmail.From = emailRemetente
 
'Configura o E-mail de retorno para voc� ser avisado em caso de problemas no envio da mensagem
AspEmail.MailFrom = emailRemetente
 
 
'Configura o e-mail que receber� as respostas desta mensagem
AspEmail.AddReplyTo responderPara
 
'Configura os destinat�rios da mensagem
AspEmail.AddAddress emailDestinatario, nomeDestinatario
 
'Configura para enviar e-mail Com C�pia
'AspEmail.AddCC "nome0@dominio.com.br", "Nome"
'AspEmail.AddCC "nome1@dominio.com.br", "Nome"
'AspEmail.AddCC "nome2@dominio.com.br", "Nome"
 
'Configura o Assunto da mensagem enviada
AspEmail.Subject = assunto
 
'Configura o formato da mensagem para HTML
AspEmail.IsHTML = True
 
'Configura o conte�do da Mensagem
AspEmail.Body = mensagem
 
'Utilize este c�digo caso queira enviar arquivo anexo
'AspEmail.AddAttachment("E:\home\SEU_LOGIN_FTP\Web\caminho_do_arquivo")
 
'Para quem utiliza servi�os da REVENDA conosco
'AspEmail.AddAttachment("E:\vhosts\DOMINIO_COMPLETO\httpdocs\caminho_do_arquivo")
 
'#Ativa o tratamento de erros
On Error Resume Next
 
'Envia a mensagem
AspEmail.Send
 
'Caso ocorra problemas no envio, descreve os detalhes do mesmo.
If Err <> 0 Then
	erro = "<b><font color='red'> Erro ao enviar a mensagem.</font></b><br>"
	erro = erro & "<b>Erro.Description:</b> " & Err.Description & "<br>"
	erro = erro & "<b>Erro.Number:</b> "      & Err.Number & "<br>"
	erro = erro & "<b>Erro.Source:</b> "      & Err.Source & "<br>"
	response.write erro
End If
 
'## Remove a refer�ncia do componente da mem�ria ##
SET AspEmail = Nothing


%>

<%
	Response.redirect "contato_certo.html"
%>
