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
今日を 2017-6-15 と仮定し、2017-5-1 から 2017-6-15 までの集計データを取得します
```powerquery
結果で
          enrollmentNumber = "100"、
          optionalParameters = [ numberOfMonth = 1 ]、
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
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
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
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
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      と
          します
```

Result: 
```powerquery
関数は、2017-4-1 から 2017-6-15 までのデータを返します
```



