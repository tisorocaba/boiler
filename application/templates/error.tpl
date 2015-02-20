<div class="text-center" style="margin-top:50px;">
	<span class="glyphicon glyphicon-exclamation-sign text-danger" style="font-size:30px"></span>
	<p style="margin-top:10px;">
		<strong class="text-muted">
		{{#if responseJSON}}
			{{responseJSON.errorMessage}}
		{{else}}
			Ocorreu um erro na requisição. Favor tentar novamente!
		{{/if}}
		</strong>
	</p>
	<button class="btn btn-warning" style="width:150px;">Voltar</button>
	<a href="#/" class="btn btn-primary" style="width:150px;">Voltar</a>
</div>