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
假設今天是 2017-6-15，會取得 2017-5-1 至 2017-6-15 間的摘要資料
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
函式會傳回 2017-5-1 至 2017-6-15 間的摘要資料
```


### Example #2 
假設今天是 2017-6-15，會取得 2017 年 4 月的摘要資料。
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
函式會傳回 2017-4-1 至 2017-4-30 間的資料
```


### Example #3 
假設今天是 2017-6-15，會取得從 2017 年 4 月到目前為止的摘要資料。
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
函式會傳回 2017-4-1 至 2017-6-15 間的資料
```



