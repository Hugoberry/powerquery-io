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
Supoñendo que hoxe é 15/06/2017, obtén os datos de resumos para os días comprendidos entre o 01/05/2017 e o 15/06/2017
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
A función devolverá datos resumidos de entre o 01/05/2017 e o 15/06/2017
```


### Example #2 
Supoñendo que hoxe é 15/06/2017, obtén os datos de resumos para abril de 2017
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
A función devolverá datos de entre o 01/04/2017 e o 30/04/2017
```


### Example #3 
Supoñendo que hoxe é 15/06/2017, obtén os datos de resumos desde abril de 2017 ata agora
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
A función devolverá datos de entre o 01/04/2017 e o 15/06/2017
```



