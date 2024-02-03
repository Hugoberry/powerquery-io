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
Бүгінгі күнді 2017-6-15 деп қабылдап, 2017-5-1 және 2017-6-15 аралығындағы жиынтықтардың деректерін алу
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
Функция 2017-5-1 және 2017-6-15 аралығындағы жиынтықтардың деректерін қайтарады
```


### Example #2 
Бүгінгі күнді 2017-6-15 деп қабылдап, 2017 жылдың сәуір айы үшін жиынтықтардың деректерін алу.
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
Функция 2017-4-1 және 2017-4-30 аралығындағы деректерді қайтарады
```


### Example #3 
Бүгінгі күнді 2017-6-15 деп қабылдап, 2017 жылдың сәуір айынан бастап қазірге дейінгі жиынтықтардың деректерін алу.
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
Функция 2017-4-1 және 2017-6-15 аралығындағы деректерді қайтарады
```



