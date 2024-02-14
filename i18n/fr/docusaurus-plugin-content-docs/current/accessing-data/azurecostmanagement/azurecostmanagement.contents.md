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
En supposant qu’aujourd&#39;hui nous sommes le 15-06-2017, obtient les données des synthèses entre le 01-05-2017 et le 15-06-2017
```powerquery
let
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          résultat = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          résultat
```

Result: 
```powerquery
La fonction retourne les données des synthèses entre le 01-05-2017 et le 15-06-2017
```


### Example #2 
En supposant qu’aujourd&#39;hui nous sommes le 15-06-2017, obtient les données des synthèses d&#39;avril 2017.
```powerquery
let
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          résultat = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          résultat
```

Result: 
```powerquery
La fonction retourne les données entre le 01-04-2017 et le 30-04-2017
```


### Example #3 
En supposant qu’aujourd&#39;hui nous sommes le 15-06-2017, obtient les données des synthèses d&#39;avril 2017 à maintenant.
```powerquery
let
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          résultat = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          résultat
```

Result: 
```powerquery
La fonction retourne les données entre le 01-04-2017 et le 15-06-2017
```



