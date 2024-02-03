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
Olettaen, että tänään on 2017-6-15, hae yhteenvetotiedot välillä 2017-5-1 ja 2017-6-15
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
Funktio palauttaa yhteenvetotiedot välillä 2017-5-1 ja 2017-6-15
```


### Example #2 
Olettaen, että tänään on 2017-6-15, hae yhteenvetotiedot huhtikuulle 2017.
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
Funktio palauttaa tiedot välillä 2017-4-1 ja 2017-4-30
```


### Example #3 
Olettaen, että tänään on 2017-6-15, hae yhteenvetotiedot huhtikuusta 2017 tähän hetkeen.
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
Funktio palauttaa tiedot välillä 2017-4-1 ja 2017-6-15
```



