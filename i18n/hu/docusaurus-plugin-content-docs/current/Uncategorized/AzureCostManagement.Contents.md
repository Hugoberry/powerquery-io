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
Ha a mai dátum 2017. 6. 15., lekéri a 2017. 5. 1. és 2017. 6. 15. közötti adatok összesítését
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
A függvény a 2017. 5. 1. és 2017. 6. 15. közötti összefoglaló adatokat adja vissza
```


### Example #2 
Ha a mai dátum 2017. 6. 15., a 2017. áprilisi összefoglaló adatokat kéri le.
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
A függvény a 2017. 4. 1. és 2017. 4. 30. közötti adatokat adja vissza
```


### Example #3 
Ha a mai dátum 2017. 6. 15., a 2017. áprilistól a mai napig tartó összefoglaló adatokat kéri le.
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
A függvény a 2017. 4. 1. és 2017. 6. 15. közötti adatokat adja vissza
```



