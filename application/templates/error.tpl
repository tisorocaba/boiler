<div class="modal" tabindex="-1">
	<div class="modal-dialog" style="margin-top:100px;">
		<div class="modal-content">
			<div class="modal-header"></div>
			<div class="modal-body text-center">
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
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<button class="btn btn-warning btn-block" data-dismiss="modal">Voltar</button>
					</div>
					<div class="col-md-4">
						<a href="#/" class="btn btn-primary btn-block">Página Inicial</a>
					</div>
				</div>
			</div>
			<div class="modal-footer"></div>
		</div>
	</div>
</div>