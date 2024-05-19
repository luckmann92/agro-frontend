<template>
	<div class="header-bottom">
		<div class="container">
			<p>Вы не можете подавать заявки пока не прошли регистрацию участника</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HeaderBottom',
  props: {},
}
</script>

<style scoped lang="scss">
.header-bottom {
  background-color: #F2F2F2;
	font-weight: 500;

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 12px 0;
	}
}
</style>
