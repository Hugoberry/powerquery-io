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
Assuming today is 2017-6-15, get summaries data between 2017-5-1 to 2017-6-15
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
Function will return summaries data between 2017-5-1 to 2017-6-15
```


### Example #2 
Assuming today is 2017-6-15, get summaries data for April 2017.
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
Function will return data between 2017-4-1 and 2017-4-30
```


### Example #3 
Assuming today is 2017-6-15, get summaries data from April 2017 till now.
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
Function will return data between 2017-4-1 and 2017-6-15
```



