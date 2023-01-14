<template>
  <div class="menu">
    <!-- :key의 용도 : 반복문 쓸 때 꼭 써야함
                    반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀 -->
    <a v-for="(any, i) in menus" :key="i">{{ any }}</a>
  </div>
  <div v-for="i in 3" :key="i">
    <img :src="`@/assets/${roomImg[i-1]}`">
    <h4>{{ products[i-1] }}</h4>
    <p>{{ price[i-1] }} 만원</p>
    <button @click="신고수[i-1]+=1">허위매물신고</button> <span>신고수: {{ 신고수[i-1] }}</span>
  </div> 
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

export default {
  name: 'App',
  data(){
    return {
      roomImg:['room0.jpg', 'room1.jpg', 'room2.jpg'] ,
      신고수: [0, 0, 0],
      menus:['Home', 'Shop', 'About'],
      price: [50, 60, 70],
      products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸']
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
  }
}
</script>

<style>
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
