---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

고급 쿼리 함수를 제공합니다.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

고급 쿼리 함수를 제공합니다.


## Examples

### Example #1 
오늘이 2017년 6월 15일이라고 가정할 경우 2017년 5월 1일부터 2017년 6월 15일까지의 요약 데이터를 가져옵니다.
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
함수는 2017년 5월 1일부터 2017년 6월 15일까지의 요약 데이터를 반환합니다.
```


### Example #2 
오늘이 2017년 6월 15일이라고 가정할 경우 2017년 4월의 요약 데이터를 가져옵니다.
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
함수는 2017년 4월 1일부터 2017년 4월 30일까지의 데이터를 반환합니다.
```


### Example #3 
오늘이 2017년 6월 15일이라고 가정할 경우 2017년 4월부터 현재까지의 요약 데이터를 가져옵니다.
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
함수는 2017년 4월 1일부터 2017년 6월 15일까지의 데이터를 반환합니다.
```


### Example #4 
오늘이 2017년 6월 15일이라고 가정할 경우 지난 12월부터 올해 2월까지의 요약 데이터를 가져옵니다. 
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      in     
          result
    
```

Result: 
```powerquery
함수는 2016년 12월 1일부터 2017년 2월 28일까지의 데이터를 반환합니다.
```


### Example #5 
오늘이 2017년 6월 15일이라고 가정할 경우 지난 18개월 동안의 마켓플레이스 수수료를 가져옵니다.
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
함수는 2015년 12월 1일부터 2017년 6월 15일까지의 데이터를 반환합니다.
```


### Example #6 
오늘이 2017년 6월 15일이라고 가정할 경우 2017년 5월과 6월의 수수료 세부 내역을 가져옵니다.
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
함수는 2017년 5월 1일부터 2017년 6월 15일까지의 데이터를 반환합니다.
```


### Example #7 
오늘이 2017년 7월 3일이라고 가정할 경우 2016년 7월의 수수료 세부 내역을 가져옵니다.
```powerquery

      let  
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      in     
          result
    
```

Result: 
```powerquery
함수는 2016년 7월 1일부터 2016년 7월 31일까지의 데이터를 반환합니다.
```


### Example #8 
오늘이 2017년 7월 13일이라고 가정할 경우 지난 10개월과 이번 달 13일을 합한 기간 동안의 잔고 요약을 가져옵니다.
```powerquery

      let  
          enrollmentNumber = "100",
          optionalParameters = [ dataType = "Summaries", numberOfMonth = 10 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      in     
          result
    
```

Result: 
```powerquery
함수는 2016년 9월 1일부터 2017년 7월 13일까지의 데이터를 반환합니다.
```



