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
Wenn heute der 15. Juni 2017 ist, dann werden zusammenfassende Daten für den Zeitraum zwischen dem 1. Mai 2017 und dem 15. Juni 2017 abgerufen.
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
Die Funktion gibt zusammenfassende Daten für den Zeitraum zwischen dem 1. Mai 2017 und dem 15. Juni 2017 zurück.
```


### Example #2 
Wenn heute der 15. Juni 2017 ist, dann werden zusammenfassende Daten für April 2017 abgerufen.
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
Die Funktion gibt Daten für den Zeitraum zwischen dem 1. April 2017 und dem 30. April 2017 zurück.
```


### Example #3 
Wenn heute der 15. Juni 2017 ist, dann werden zusammenfassende Daten für den Zeitraum von April 2017 bis heute abgerufen.
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
Die Funktion gibt Daten für den Zeitraum zwischen dem 1. April 2017 und dem 15. Juni 2017 zurück.
```



