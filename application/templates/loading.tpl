<div id="wrapper"></div>
<div id="content">
	<img src="assets/img/loader.gif"/>
	<br>
	<br>
	<strong class="text-info">Requisição em andamento. Aguarde...</strong>
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