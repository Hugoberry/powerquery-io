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
Ervan uitgaande dat het vandaag 15-6-2017 is, samenvattingen van gegevens ophalen van 1-5-2017 tot en met 15-6-2017
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
De functie geeft als resultaat een samenvatting van de gegevens tussen 1-5-2017 en 15-6-2017
```


### Example #2 
Ervan uitgaande dat het vandaag 15-6-2017 is, samenvattingen van gegevens ophalen voor april 2017.
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
De functie geeft als resultaat de gegevens tussen 1-4-2017 en 30-4-2017
```


### Example #3 
Ervan uitgaande dat het vandaag 15-6-2017 is, samenvattingen van gegevens ophalen vanaf april 2017 tot nu.
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
De functie geeft als resultaat de gegevens tussen 1-4-2017 en 15-6-2017
```



