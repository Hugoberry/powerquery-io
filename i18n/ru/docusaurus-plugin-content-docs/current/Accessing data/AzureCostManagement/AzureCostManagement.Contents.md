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
Предположив, что сегодня 15.06.2017, получить данные сводок между датами 01.05.2017 и 15.06.2017
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
Функция вернет данные сводок с 01.05.2017 по 15.06.2017
```


### Example #2 
Предположив, что сегодня 15.06.2017, получить данные сводок за апрель 2017 г.
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
Функция вернет данные с 01.04.2017 по 30.04.2017
```


### Example #3 
Предположив, что сегодня 15.06.2017, получить данные сводок с апреля 2017 г. по настоящее время.
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
Функция вернет данные с 01.04.2017 по 15.06.2017
```



