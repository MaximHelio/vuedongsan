<template>
<!--한번에 렌더링할 때 div로 감싸기-->
  <div id="exist"></div>
  <div v-if="consumes">
    <Modal @closeModal="isModalOpen=false" :products="products" :누른거="누른거" :isModalOpen="isModalOpen"/>
    <div class="menu">
      <!-- :key의 용도 : 반복문 쓸 때 꼭 써야함
                      반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀 -->
      <a v-for="(any, i) in menus" :key="i">{{ any }}</a>
    </div>
    <Discount/>
    <input type="text" v-model="query" @keyup="realTime($event)">
    <button @click="search()">검색</button>
    <div>최근검색어</div>
    <div v-for="(item, i) in recentSearch" :key="i">
      <span style="color: green">{{ item }}</span>
    </div>
    <div v-for="(consume, i) in consumes" :key="i">
      <span v-html="highlight(String(consume.price))"></span>
    </div>
    <Card @openModal="isModalOpen=true; 누른거=$event"
      :원룸="products[i-1]" v-for="i in products.length" :key="i"    
      :isModalOpen="isModalOpen"
    />
    <!--html안에선 this 생략-->
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
  </div>
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
      query: '',
      throttle: false,
      recentSearch: [],
    }
  },
  computed: {
    consumes() {
      return this.$store.state.$consumes.consumes
    }
  },
  mounted() {
    // html 한번 그려진 다음에, 화면이 있다는 확신이 있는 다음에 
    console.log(document.getElementById('exist'))
  },
  methods : {
    search() {
      // 문자열을 배열로 바꿈
      const queries = JSON.parse(localStorage.getItem('queries') || '[]')
      queries.push(this.query)
      // 로컬스토리지로 저장할 때는 문자열로 저장
      localStorage.setItem('queries', JSON.stringify(queries))
      this.recentSearch = queries
      // this.$store.dispatch('consumersRead', this.query)
    },
    increase(){
      this.index.forEach(i => {
        this.신고수[i-1] += 1
      });
    },
    realTime() {
      if (!this.throttle) {
        setTimeout(() => {
          console.log(this.query)
          // 통신
          this.$store.dispatch('consumersRead', this.query)
          this.throttle = false
        }, 500);
      }
      this.throttle = true
    },
    highlight(text) {
      // 검색어가 없거나, 쿼리를 포함하지 않으면
      // if (!this.query && !text.includes(this.query)) return text
      if (!this.query || !text.includes(this.query)) return text
      // 검색어가 있고, 쿼리를 포함할 경우
      console.log(text.indexOf(this.query))
      let highlightText = ''
      for (let i = 0; i < text.length; i++) {
        if (this.query.includes(text[i])) {
          highlightText += `<span style="color: yellow;">${text[i]}</span>`
        } else {
          highlightText += text[i]
        }
      }
      return highlightText
    }
  },
  components: {
    Discount: Discount,
    Modal: Modal,
    Card: Card,
  },
  created() { //html 그리기 전 통신
    console.log(document.getElementById('exist'))
    // 새로고침될 때 recentSearch에 넣어줌
    this.recentSearch = this.recentSearch.concat(JSON.parse(localStorage.getItem('queries') || '[]'))
    console.log(this.recentSearch)
    this.$store.dispatch('consumersRead', '')
    console.log(this.consumes)
    console.log(this.consumes) //123
    console.log(this.consumes) //123
    console.log(this.consumes)
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
