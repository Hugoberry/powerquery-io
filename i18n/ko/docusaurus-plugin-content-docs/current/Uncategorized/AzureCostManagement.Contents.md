---
title: AzureCostManagement.Contents
---

# AzureCostManagement.Contents



## Syntax

```powerquery
AzureCostManagement.Contents(
    scope as text,
    scopeValue as text,
    numberOfMonths as number,
    optional parameters as record
) as table
```



## Examples

### Example #1 
오늘이 2017년 6월 15일이라고 가정할 경우 2017년 5월 1일부터 2017년 6월 15일까지의 요약 데이터를 가져옵니다.
```powerquery
let
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
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
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
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
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          result
```

Result: 
```powerquery
함수는 2017년 4월 1일부터 2017년 6월 15일까지의 데이터를 반환합니다.
```



