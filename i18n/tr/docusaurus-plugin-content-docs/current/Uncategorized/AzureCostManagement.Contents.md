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
Bugünün 2017-6-15 olduğu varsayılırsa, 2017-5-1 ile 2017-6-15 arasındaki özet verilerini alın
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
İşlev 2017-5-1 ile 2017-6-15 arasındaki özet verilerini döndürür
```


### Example #2 
Bugünün 2017-6-15 olduğu varsayılırsa, Nisan 2017&#39;ye ait özet verilerini alın.
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
İşlev 2017-4-1 ile 2017-4-30 arasındaki verileri döndürür
```


### Example #3 
Bugünün 2017-6-15 olduğu varsayılırsa, Nisan 2017&#39;den şimdiye kadar olan özet verilerini alın.
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
İşlev 2017-4-1 ile 2017-6-15 arasındaki verileri döndürür
```



