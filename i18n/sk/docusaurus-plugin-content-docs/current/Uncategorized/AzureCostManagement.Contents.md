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
Načíta údaje o súhrnoch medzi 1. 5. 2017 a 15. 6. 2017 za predpokladu, že dnes je 15. 6. 2017
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
Funkcia vráti údaje o súhrnoch medzi 1. 5. 2017 a 15. 6. 2017
```


### Example #2 
Načíta údaje o súhrnoch z apríla 2017 za predpokladu, že dnes je 15. 6. 2017.
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
Funkcia vráti údaje medzi 1. 4. 2017 a 30. 4. 2017
```


### Example #3 
Načíta údaje o súhrnoch od apríla 2017 až po dnešok za predpokladu, že dnes je 15. 6. 2017.
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
Funkcia vráti údaje medzi 1. 4. 2017 a 15. 6. 2017
```



