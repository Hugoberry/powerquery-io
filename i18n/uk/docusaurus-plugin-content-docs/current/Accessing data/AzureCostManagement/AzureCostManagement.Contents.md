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
Припускаючи, що сьогодні 15.06.2017, отримати дані зведень за період від 01.05.2017 до 15.06.2017.
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
Функція повертає дані зведень за період від 01.05.2017 до 15.06.2017.
```


### Example #2 
Припускаючи, що сьогодні 15.06.2017, отримати дані зведень за квітень 2017 р.
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
Функція повертає дані за період від 01.04.2017 до 30.04.2017.
```


### Example #3 
Припускаючи, що сьогодні 15.06.2017, отримати дані зведень за період від квітня 2017 р. до цього часу.
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
Функція повертає дані за період від 01.04.2017 до 15.06.2017.
```



