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
Pieņemot, ka šodien ir 15.06.2017, iegūt kopsavilkumu datus starp 01.05.2017 un 15.06.2017
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
Funkcija atgriezīs kopsavilkumu datus no 01.05.2017 līdz 15.06.2017
```


### Example #2 
Pieņemot, ka šodien ir 15.06.2017, iegūt 2017. gada aprīļa kopsavilkumu datus.
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
Funkcija atgriezīs datus starp 01.04.2017 un 30.04.2017
```


### Example #3 
Pieņemot, ka šodien ir 15.06.2017, iegūt kopsavilkumu datus no 2017. gada aprīļa līdz pašreizējam brīdim.
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
Funkcija atgriezīs datus starp 01.04.2017 un 15.06.2017
```



