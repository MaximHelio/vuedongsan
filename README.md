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
telnet t-pfm-api.samsungcard.biz 80
ping t-pfm-api.samsungcard.biz
ping은 되는데 telnet은 안됨 => 방화벽 안열림

-계획 예산금액에서 보여줄 땐 만 원 단위로 
Number(mms1BdgInfData.planBdgAm / 10000) 

-setDefaultImg(data, idx) {
  //웹스크래핑카드상품코드 이미지가 없는 경우 
  if(!_.isEmpty(data.webscarpCardPdC) {
    this.$set(this.cardCsmInfList[idx], 'webscrapErr', true);
  } else {
    this.$set(this.cardCsmInfList[idx], 'orgErr', true);
  }
}

-목록 받아서 날짜별로 취합 
for(let i=0; i<this.rcmms3DlngList.length;i++) {
 const dateCondition = 
    this.dateArr.filter(item => item.dlngDdDow === this.rcmms3DlngList[i].dlngDdDow).length > 0;
 if(!dateCondition) {
    this.dateArr.push({
      dlngMm: this.rcmms3DlngList[i].dlngMm;
      chargeList: [], // 날짜별 청구서 리스트
    })
 }
}
for(let i=0; i<this.rcmms3DlngList.length; i++) {
  for(let j=0; j<this.dateArr.length; j++){
    this.dateArr[j].chargeList.push({
      merchantName: this.rcmms3DlngList[i].merchantName, //가맹점명
      dlngHm: this.rcmms3DlngList[i].dlngHm, //결제시분
    })
  }
}


##
async callGetDateYmBridge() {
  //getDateYmd 브릿지 호출
  const param = {
    title: '조회기간',
    default: this.csmAgrgY + this.csmAgrgMm,
    minDate: '190001',
    maxDate: this.$dateUtil.now(this.$dateUtil.FORMAT.YYYYMM),    
  }
}


## 
this.$log.wan()
this.$log.log(`결과: ${JSON.stringify(response)}`};

### 소비합계포함여부 토글 세팅 
this.dtCbyAcInfList.forEach(data => {
  data.selectedItem = data.amExcdYn === 'N';
});


##
