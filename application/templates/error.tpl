<div style="position:absolute;width:100%;z-index:9999;top:0;left:0;height:100%;background:#ffffff;opacity:.80;"></div>

<div style="position:absolute;width:100%;z-index:9999;top:100px;left:0;" class="text-center">
	<span class="glyphicon glyphicon-exclamation-sign text-danger" style="font-size:30px"></span>
	<p style="margin-top:10px;">
		<strong class="text-muted">
		{{#if responseJSON}}
			{{responseJSON.errorMessage}}
		{{else}}
			Ocorreu um erro na requisição! Favor tentar novamente.
		{{/if}}
		</strong>
	</p>
	<button type="button" class="btn btn-warning btn-fechar" style="width:150px;">Voltar</button>
	<a href="#/" class="btn btn-primary" style="width:150px;">Início</a>
</div>
