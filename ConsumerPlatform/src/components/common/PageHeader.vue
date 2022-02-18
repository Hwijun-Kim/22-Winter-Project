<template>
<header>
  <div>
    <router-link to="/" class="home">
    Home
      <i class="fas fa-home"></i>
    </router-link>
  </div>
    </header>
</template>

<script>

export default {};
</script>

<style>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: #364f6b;
	z-index: 2;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}



.home {
	font-size: 14px;
	font-weight: normal;
  color: white;
}
.buttons {
	margin-left: 10px;
  color: white;
}
</style>
