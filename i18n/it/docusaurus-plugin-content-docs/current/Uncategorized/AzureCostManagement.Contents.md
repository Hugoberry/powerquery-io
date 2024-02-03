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
Supponendo che oggi sia il 15/06/2017, ottiene i dati dei riepiloghi per il periodo dal 01/05/2017 al 15/06/2017
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
La funzione restituisce i dati dei riepiloghi per il periodo dal 01/05/2017 al 15/06/2017
```


### Example #2 
Supponendo che oggi sia il 15/06/2017, ottiene i dati dei riepiloghi per il mese di aprile 2017
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
La funzione restituisce i dati per il periodo dal 01/04/2017 al 30/04/2017
```


### Example #3 
Supponendo che oggi sia il 15/06/2017, ottiene i dati dei riepiloghi dal mese di aprile 2017 a oggi
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
La funzione restituisce i dati per il periodo dal 01/04/2017 al 15/06/2017
```



