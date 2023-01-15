<template>
    <div>
    <img :src="products[i-1].image" class="room-img">
    <h4>{{ products[i-1].title }}</h4>
    <p>{{ products[i-1].price }}원</p>
    <!-- <button>허위매물신고</button> <span>신고수: {{ 신고수[i-1] }}</span> -->
  </div> 
</template>

<script>
export default {
    name: 'CardVue',
    props: {
        products: Array,
        누른거: Number,
        isModalOpen: Boolean,
        신고수: Number,
    }
}
</script>

<style>

</style>