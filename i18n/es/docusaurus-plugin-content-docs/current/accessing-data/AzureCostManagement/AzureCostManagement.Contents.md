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
Suponiendo que hoy es 15/06/2017, obtiene los datos de los resúmenes correspondientes al período comprendido entre el 01/05/2017 y el 15/06/2017.
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
La función devolverá los datos de los resúmenes correspondientes al periodo comprendido entre el 01/05/2017 y el 15/06/2017.
```


### Example #2 
Suponiendo que hoy es 15/06/2017, obtiene los datos de los resúmenes correspondientes a abril de 2017.
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
La función devolverá los datos correspondientes al periodo comprendido entre el 01/04/2017 y el 30/04/2017.
```


### Example #3 
Suponiendo que hoy es 15/06/2017, obtiene los datos de los resúmenes correspondientes al periodo comprendido entre abril de 2017 hasta ahora.
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
La función devolverá los datos correspondientes al periodo comprendido entre el 01/04/2017 y el 15/06/2017.
```



