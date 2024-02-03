---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

提供進階查詢函式。


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

提供進階查詢函式。


## Examples

### Example #1 
假設今天是 2017-6-15，會取得 2017-5-1 至 2017-6-15 間的摘要資料
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
函式會傳回 2017-5-1 至 2017-6-15 間的摘要資料
```


### Example #2 
假設今天是 2017-6-15，會取得 2017 年 4 月的摘要資料。
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
函式會傳回 2017-4-1 至 2017-4-30 間的資料
```


### Example #3 
假設今天是 2017-6-15，會取得從 2017 年 4 月到目前為止的摘要資料。
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
函式會傳回 2017-4-1 至 2017-6-15 間的資料
```


### Example #4 
假設今天是 2017-6-15，會取得去年 12 月到今年 2 月的摘要資料 
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
函式會傳回 2016-12-1 至 2017-2-28 間的資料
```


### Example #5 
假設今天是 2017-6-15，會取得過去 18 個月的 Marketplace 費用
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
函式會傳回 2015-12-1 至 2017-6-15 間的資料
```


### Example #6 
假設今天是 2017-6-15，會取得 2017 年 6 月和 2017 年 5 月的詳細費用
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
函式會傳回 2017-5-1 至 2017-6-15 間的資料
```


### Example #7 
假設今天是 2017-07-03，會取得 2016 年 7 月的詳細費用
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
函式會傳回 2016-07-01 至 2016-07-31 間的資料
```


### Example #8 
假設今天是 2017-7-13，會取得過去 10 個月加上這個月 13 天的結餘摘要
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
函式會傳回 2016-9-1 至 2017-7-13 間的資料
```



