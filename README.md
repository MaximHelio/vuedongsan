# vue3-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 데이터가 전부 2개 이상 들어가있다는 증거
SELECT A.SRV_REQ_USER_ID, A.INSU_NUM, COUNT(1)
FROM SERVICE.INSU_INSURANCES_V2 A
GROUP BY A.SRV_REQ_USER_ID, A.INSU_NUM
HAVING COUNT(1) > 1;

## 마이너스 대출 약정 신규탐지/MDP_DB_MDP_MSOPPSN007 상시 배치) 호출 쓰기 
##
