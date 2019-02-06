<template>
	<header>
		<b-collapse class="collapse bg-dark" id="navbarHeader">
			<div class="container">
				<div class="row">
					<div class="col-sm-8 col-md-7 py-4">
						<h4 class="text-white">About</h4>
						<p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
					</div>
					<div class="col-sm-4 offset-md-1 py-4">
						<h4 class="text-white">Contact</h4>
						<ul class="list-unstyled">
							<li><a href="#" class="text-white">Follow on Twitter</a></li>
							<li><a href="#" class="text-white">Like on Facebook</a></li>
							<li><a href="#" class="text-white">Email me</a></li>
						</ul>
					</div>
				</div>
			</div>
		</b-collapse>
		<div class="navbar navbar-dark bg-dark shadow-sm">
			<div class="container d-flex justify-content-between">
				<a href="#" class="navbar-brand d-flex align-items-center">
					<app-logo/>
					<strong>Album</strong>   
				</a>
					<button type="button"
						class="navbar-toggler"
						v-b-toggle.navbarHeader
						variant="primary">
					<span class="navbar-toggler-icon"></span>
				</button>
			</div>
		</div>
	</header>
</template>

<script>
import appLogo from '~/components/logo.vue'

export default {
	data () {
		return {
			todo: ''
		}
	},
	components: {appLogo},
	methods: {
	}
}
</script>
