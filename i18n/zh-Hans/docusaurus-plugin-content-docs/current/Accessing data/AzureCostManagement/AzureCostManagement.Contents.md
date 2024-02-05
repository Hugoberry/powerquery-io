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
假设今天是 2017 年 6 月 15 日，获取 2017 年 5 月 1 日到 2017 年 6 月 15 日之间的摘要数据
```powerquery
设
          enrollmentNumber = “100”，
          optionalParameters = [ numberOfMonth = 1 ]，
      则在
          结果中
          结果 = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
```

Result: 
```powerquery
函数将返回 2017 年 5 月 1 日到 2017 年 6 月 15 日之间的摘要数据
```


### Example #2 
假设今天是 2017 年 6 月 15 日，获取 2017 年 4 月的摘要数据。
```powerquery
设
          enrollmentNumber = “100”，
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ]，
      则在
          结果中
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
```

Result: 
```powerquery
函数将返回 2017 年 4 月 1 日到 2017 年 4 月 30 日之间的数据
```


### Example #3 
假设今天是 2017 年 6 月 15 日，获取从 2017 年 4 月至今的摘要数据。
```powerquery
设
          enrollmentNumber = “100”，
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ]，
      则在
          结果中
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
```

Result: 
```powerquery
函数将返回 2017 年 4 月 1 日到 2017 年 6 月 15 日之间的数据
```



