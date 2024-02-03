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
Suposant que avui sigui 15 de juny del 2017, s&#39;obtindran les dades resumides corresponents al període entre l&#39;1 de maig del 2017 i el 15 de juny del 2017.
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
La funció retornarà els resums corresponents al període entre l'1 de maig del 2017 i el 15 de juny del 2017.
```


### Example #2 
Suposant que avui sigui 15 de juny del 2017, s&#39;obtindran les dades resumides corresponents a l&#39;abril del 2017.
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
La funció retornarà les dades corresponents al període entre l'1 d'abril del 2017 i el 30 d'abril del 2017.
```


### Example #3 
Suposant que avui sigui 15 de juny del 2017, s&#39;obtindran les dades resumides corresponents al període entre l&#39;abril del 2017 fins ara.
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
La funció retornarà les dades corresponents al període entre l'1 d'abril del 2017 i el 15 de juny del 2017.
```



