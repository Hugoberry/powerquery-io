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
Presupunând că astăzi este 15.06.2017, obțineți rezumatele de date dintre 1.05.2017 și 15.06.2017
```powerquery
permiteți
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          rezultat = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      în
          rezultat
```

Result: 
```powerquery
Funcția va returna rezumatele de date dintre 1.05.2017 și 15.06.2017
```


### Example #2
Presupunând că astăzi este 15.06.2017, obțineți rezumatele de date pentru aprilie 2017.
```powerquery
permiteți
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          rezultat = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      în
          rezultat
```

Result: 
```powerquery
Funcția va returna datele dintre 1.04.2017 și 30.04.2017
```


### Example #3
Presupunând că astăzi este 15.06.2017, obțineți rezumatele de date din aprilie 2017 până acum.
```powerquery
permiteți
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Rezumate" ],
          rezultat = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      în
          rezultat
```

Result: 
```powerquery
Funcția va returna datele dintre 1.04.2017 și 15.06.2017
```



