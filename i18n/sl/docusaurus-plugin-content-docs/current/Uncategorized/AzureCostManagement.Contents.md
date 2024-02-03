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
Denimo, da je danes 15. 6. 2017 ter da želite pridobiti podatke povzetkov med 1. 5. 2017 in 15. 6. 2017
```powerquery
let
          enrollmentNumber="100",
          optionalParameters=[numberOfMonth=1],
          result= AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          result
```

Result: 
```powerquery
Funkcija vrne podatke povzetkov med 1. 5. 2017- in 15. 6. 2017
```


### Example #2 
Denimo, da je danes 15. 6. 2017 in da želite pridobiti podatke povzetkov za april 2017.
```powerquery
let
          enrollmentNumber="100",
          optionalParameters=[startBillingDataWindow="-2", endBillingDataWindow="-1"],
          result= AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          result
```

Result: 
```powerquery
Funkcija vrne podatke med 1. 4. 2017 in 30. 4. 2017
```


### Example #3 
Denimo, da je danes 15. 6. 2017 in da želite pridobiti podatke povzetkov od aprila 2017 do današnjega dne.
```powerquery
let
          enrollmentNumber="100",
          optionalParameters=[startBillingDataWindow="-2", endBillingDataWindow="0", dataType="Summaries"],
          result=AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          result
```

Result: 
```powerquery
Funkcija vrne podatke med 1. 4. 2017 in 15. 6. 2017
```



