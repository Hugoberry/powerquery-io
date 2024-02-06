---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


高度なクエリ関数を提供します。


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Remarks

高度なクエリ関数を提供します。


## Examples

### Example #1 
今日を 2017-6-15 と仮定し、2017-5-1 から 2017-6-15 までの集計データを取得します
```powerquery

      結果で    
          enrollmentNumber = "100"、
          optionalParameters = [ numberOfMonth = 1 ]、
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      と     
          します
    
```

Result: 
```powerquery
関数は、2017-5-1 から 2017-6-15 までの集計データを返します
```


### Example #2 
今日を 2017-6-15 と仮定し、2017 年 4 月の集計データを取得します。
```powerquery

      結果で    
          enrollmentNumber = "100"、
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ]、
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      と     
          します
    
```

Result: 
```powerquery
関数は、2017-4-1 から 2017-4-30 までのデータを返します
```


### Example #3 
今日を 2017-6-15 と仮定し、2017 年 4 月から現時点までの集計データを取得します。
```powerquery

      結果で    
          enrollmentNumber = "100"、
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ]、
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      と     
          します
    
```

Result: 
```powerquery
関数は、2017-4-1 から 2017-6-15 までのデータを返します
```


### Example #4 
今日を 2017-6-15 と仮定し、去年の 12 月から今年の 2 月までの集計データを取得します
```powerquery

      結果で    
          enrollmentNumber = "100"、
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Summaries" ]、
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      と     
          します
    
```

Result: 
```powerquery
関数は、2016-12-1 から 2017-2-28 までのデータを返します
```


### Example #5 
今日を 2017-6-15 と仮定し、過去 18 か月間の Marketplace での請求金額を取得します
```powerquery

      結果で    
          enrollmentNumber = "100"、
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ]、
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      と     
          します
    
```

Result: 
```powerquery
関数は、2015-12-1 から 2017-6-15 までのデータを返します
```


### Example #6 
今日を 2017-6-15 と仮定し、2017 年 6 月と 2017 年 5 月の請求金額の詳細を取得します
```powerquery

      結果で    
          enrollmentNumber = "100"、
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "DetailCharges" ]、
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      と     
          します
    
```

Result: 
```powerquery
関数は、2017-5-1 から 2017-6-15 までのデータを返します
```


### Example #7 
今日を 2017-07-03 と仮定し、2016 年 7 月の請求金額の詳細を取得します
```powerquery

      結果で    
          enrollmentNumber = "100"、
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges" ]、
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      と     
          します
    
```

Result: 
```powerquery
関数は、2016-07-01 から 2016-07-31 までのデータを返します
```


### Example #8 
今日を 2017-7-13 と仮定し、過去 10 か月間と今月 13 日間の残高集計を取得します
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
関数は、2016-9-1 から 2017-7-13 までのデータを返します
```



