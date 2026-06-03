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
Idet det antages, at dags dato er 15-6-2017, hent oversigtsdata fra 1-5-2017 til 15-6-2017
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
Funktionen returnerer oversigtsdata fra 1-5-2017 til 15-6-2017
```


### Example #2
Idet det antages, at dags dato er 15-6-2017, hent oversigtsdata for april 2017.
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
Funktionen returnerer data mellem 1-4-2017 og 30-4-2017
```


### Example #3
Idet det antages, at dags dato er 15-6-2017, hent oversigtsdata fra april 2017 til nu.
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
Funktionen returnerer data mellem 1-4-2017 og 15-6-2017
```



