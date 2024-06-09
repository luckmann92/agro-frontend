<template>
	<div :class="['popup', {'popup-open': popupStore.isOpen}]">
		<div class="popup__close" @click="close"></div>
		<div class="popup__in">
			<div class="logo">
				<img src="./../../assets/img/logo_large.png" alt="logo">
			</div>
			<div class="popup__content">
				<div class="txt-mdl" v-html="popupStore.content.title" />
				<div class="txt txt-gray" v-html="popupStore.content.text" />

				<!-- <u-button 
					:variant="'dark'" 
					:disabled="!phoneValid"
					@click.prevent="login"
				>Войти</u-button> -->
			</div>
		</div>
	</div>
</template>

<script>
import { computed, ref } from "vue"
import { useStore } from "@/store/popup"

export default {
	name: 'MessagePopup',
	props: {},
	setup() {
    const popupStore = useStore()
		const { close } = popupStore


		return {
			popupStore,
			close
		}
	}
}
</script>

<style lang="scss" scoped>
.popup{
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100vw;
	height: 100vh;
	opacity: 1;
	visibility: hidden;
	transform: translateY(-110%);
	transition: opacity .6s, visibility .6s, transform .6s;

	&.popup-open{
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}

	&__close{
		position: absolute;
		top: 60px;
		right: 60px;
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		// border: 1px dotted pink;
		transition: transform .3s;

		&:before, &:after{
			content: '';
			display: block;
			position: absolute;
			width: 40px;
			height: 1px;
			background: #000;
		}
		&:before{
			transform: rotate(-45deg);
		}
		&:after{
			transform: rotate(45deg);
		}

		&:hover{
			transform: scale(1.2);
		}
	}

	&__in{
		height: 100vh;
		padding: 60px 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #FBFAFC;
	}
	&__content{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 24px;
		width: 328px;
	}
}
</style>