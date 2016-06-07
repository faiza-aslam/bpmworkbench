<div class="row">
	<P style="height:100px;"></P>
	<div class="well serverDetails center-block">

		<div class="row">
			<div class="col-md-4">
				<label for="host">Server Address</label>
			</div>
			<div class="col-md-2">
				<input type="text" id="host" name="host" ng-model="serverInfo.host" />
			</div>
		</div>
		<div class="row">
			<div class="col-md-4">
				<label for="port">Port</label>
			</div>
			<div class="col-md-2">		
				<input size="5" type="text" id="port" name="port" ng-model="serverInfo.port"/>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4">
				<label for="port">User Name</label>
			</div>
			<div class="col-md-2">		
				<input type="text" id="userName" name="userName" ng-model="serverInfo.userName"/>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4">
				<label for="port">Password</label>
			</div>
			<div class="col-md-2">		
				<input id="password" name="password" type="password" ng-model="serverInfo.password"/>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4">
				
			</div>
			<div class="col-md-8">
				<button ng-click="connect()">Connect</button>
				<span class="small nohttps">Please don't use HTTPS port</span>
			</div>
		</div>

		<div class="row" ng-show="connectionFailed!=undefined">
			<div class="col-md-12">
				An error occured while connecting to server, please try again.
			</div>
		</div>
	</div>
</div>