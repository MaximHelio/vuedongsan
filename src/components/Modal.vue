<template>
  <div class="black-bg" v-if="isModalOpen==true">
    <div class="white-bg">
      <h4>{{ products[누른거].title }}</h4>
      <p>{{ products[누른거].content }}</p>
      <input @input="$event.target"><span>개월</span>
      <p>{{ products[누른거].price }}</p>
      <img :src="products[누른거].image" class="room-img">
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ModalYellow',
    data(){
      return {
        month: 1,
      }
    },
    props: {
        products: Array,
        누른거 : Number,
        isModalOpen : Boolean,
    }
}
</script>

<style>

</style>