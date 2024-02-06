---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


提供高级查询功能。


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Remarks

提供高级查询功能。


## Examples

### Example #1 
假设今天是 2017 年 6 月 15 日，获取 2017 年 5 月 1 日到 2017 年 6 月 15 日之间的摘要数据
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
函数将返回 2017 年 5 月 1 日到 2017 年 6 月 15 日之间的摘要数据
```


### Example #2 
假设今天是 2017 年 6 月 15 日，获取 2017 年 4 月的摘要数据。
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
函数将返回 2017 年 4 月 1 日到 2017 年 4 月 30 日之间的数据
```


### Example #3 
假设今天是 2017 年 6 月 15 日，获取从 2017 年 4 月至今的摘要数据。
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
函数将返回 2017 年 4 月 1 日到 2017 年 6 月 15 日之间的数据
```


### Example #4 
假设今天是 2017 年 6 月 15 日，获取从去年 12 月到今年 2 月的摘要数据
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
函数将返回 2016 年 12 月 1 日到 2017 年 2 月 28 日之间的数据
```


### Example #5 
假设今天是 2017 年 6 月 15 日，获得过去 18 个月的应用商店费用
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
函数将返回 2015 年 12 月 1 日到 2017 年 6 月 15 日之间的数据
```


### Example #6 
假设今天是 2017 年 6 月 15 日，获取 2017 年 6 月和 2017 年 5 月的详细费用
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
函数将返回 2017 年 5 月 1 日到 2017 年 6 月 15 日之间的数据
```


### Example #7 
假设今天是 2017 年 7 月 3 日，获取 2016 年 7 月的费用详细信息
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
函数会返回从 2016 年 7 月 1 日到 2016 年 7 月 31 日的数据
```


### Example #8 
假设今天是 2017 年 7 月 13 日，获取过去 10 个月外加本月 13 天的余额汇总
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
函数将返回 2016 年 9 月 1 日到 2017 年 7 月 13 日之间的数据
```



