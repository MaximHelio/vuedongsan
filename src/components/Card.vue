<template>
    <div>
    <img :src="원룸.image" class="room-img">
    <h4 @click="sendEmit">{{ 원룸.title }}</h4>
    <p>{{ 원룸.price }}원</p>
    <!-- <button>허위매물신고</button> <span>신고수: {{ 신고수[i-1] }}</span> -->
  </div> 
</template>

<script>
export default {
    name: 'CardVue',
    props: {
        원룸 : Object,
    },
    methods:{
        sendEmit(){
            this.$emit('openModal', this.원룸.id)
        }
    }
}
</script>

<style>

</style>