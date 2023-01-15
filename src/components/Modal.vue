<template>
  <div class="black-bg" v-if="isModalOpen==true">
    <div class="white-bg">
      <h4>{{ products[누른거].title }}</h4>
      <p>{{ products[누른거].content }}</p>
      <p>{{ products[누른거].price }}</p>
      <img :src="products[누른거].image" class="room-img">
    </div>
  </div>
</template>

<script>
export default {
    name: 'ModalYellow',
    props: {
        products: Array,
        누른거 : Number,
        isModalOpen : Boolean,
    }
}
</script>

<style>

</style>