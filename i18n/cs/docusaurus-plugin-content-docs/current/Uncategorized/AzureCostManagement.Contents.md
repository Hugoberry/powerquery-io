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
Pokud je dnes 2017-6-15, získat souhrny dat mezi 2017-5-1 a 2017-6-15
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
Funkce vrátí souhrny dat mezi 2017-5-1 a 2017-6-15
```


### Example #2 
Pokud je dnes 2017-6-15, získat souhrny dat za duben 2017.
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
Funkce vrátí data mezi 2017-4-1 a 2017-4-30
```


### Example #3 
Pokud je dnes 2017-6-15, získat souhrny dat od dubna 2017 do nynějška.
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
Funkce vrátí data mezi 2017-4-1 a 2017-6-15
```



