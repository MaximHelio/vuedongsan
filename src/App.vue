<template>
  <Modal :products="products" :누른거="누른거" :isModalOpen="isModalOpen"/>
  <div class="menu">
    <!-- :key의 용도 : 반복문 쓸 때 꼭 써야함
                    반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀 -->
    <a v-for="(any, i) in menus" :key="i">{{ any }}</a>
  </div>
  <Discount/>
  <Card @openModal="isModalOpen=true; 누른거=$event"
    :원룸="products[i-1]" v-for="i in products.length" :key="i"    
    :isModalOpen="isModalOpen"
  />
  <!-- <Card :원룸="products[1]" :누른거="누른거" :isModalOpen="isModalOpen"/>
  <Card :원룸="products[2]" :누른거="누른거" :isModalOpen="isModalOpen"/>
  <Card :원룸="products[3]" :누른거="누른거" :isModalOpen="isModalOpen"/>
  <Card :원룸="products[4]" :누른거="누른거" :isModalOpen="isModalOpen"/>
  <Card :원룸="products[5]" :누른거="누른거" :isModalOpen="isModalOpen"/> -->
  
  <!-- <div>
    <h4>{{ products[1] }}</h4>
    <1. 쇼핑몰 가격은 변동되는 경우가 많기 때문
         2. 실시간 자동 렌더링 기능 이용하려고 하기 때문
         3. 자주 변경되거나 중요한 데이터는 데이터 바인딩으로 박아 넣음
    <p>{{ price[1] }} 만원</p>
  </div> 
  <div>
    <h4>{{ products[2] }}</h4>
    <p>{{ price[2] }} 만원</p>
  </div> -->
  </template>

<script>
import products from './data/oneroom.js';
import Discount from './components/Discount.vue';
import Modal from './components/Modal.vue';
import Card from './components/Card.vue';

export default {
  name: 'App',
  data(){
    return {
      누른거: 0,
      roomImg:['room0.jpg', 'room1.jpg', 'room2.jpg'] ,
      신고수: [0, 0, 0],
      menus:['Home', 'Shop', 'About'],
      products: products,
      isModalOpen: false,
    }
  },
  methods : {
    increase(){
      this.index.forEach(i => {
        this.신고수[i-1] += 1;
      });
    }
  },
  components: {
    Discount: Discount,
    Modal: Modal,
    Card: Card,
  }
}
</script>

<style>
body{
  margin: 0;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg{
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img{
  width: 100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding: 10px;
}
</style>
