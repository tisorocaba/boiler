<div id="wrapper"></div>
<div id="content">
	<span class="glyphicon glyphicon-exclamation-sign text-danger" style="font-size:30px"></span>
	<br>
	<br>
	<p>
		<strong class="text-muted">
		{{#if responseJSON}}
			{{responseJSON.errorMessage}}
		{{else}}
			Ocorreu um erro na requisição. Favor tentar novamente!
		{{/if}}
		</strong>
	</p>
	<br>
	<div class="container">
		<div class="col-md-4 col-md-offset-4">
			<div class="row">
				<div class="col-md-6">
					<a href="#/" class="btn btn-warning btn-block" on-click="close()">Voltar</a>
				</div>
				<div class="col-md-6">
					<a href="#/" class="btn btn-primary btn-block">Página Inicial</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#wrapper, #content {
		position   : absolute;
		width      : 100%;
		z-index    : 9999;
	}

	#wrapper {
		top        : 0;
		left       : 0;
		height     : 100%;
		background : #ffffff;
		opacity    : .80;
	}

	#content {
		top: 100px;
		text-align : center;
	}
</style>