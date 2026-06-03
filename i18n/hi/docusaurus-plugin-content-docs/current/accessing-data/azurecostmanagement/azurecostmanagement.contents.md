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
आज को 2017-6-15 मानकर, 2017-5-1 से 2017-6-15 के बीच का सारांश डेटा प्राप्त करें
```powerquery
let
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          परिणाम
```

Result: 
```powerquery
फ़ंक्शन 2017-5-1 से 2017-6-15 के बीच का सारांश डेटा देगा
```


### Example #2
आज को 2017-6-15 मानकर, अप्रैल 2017 का सारांश डेटा प्राप्त करें.
```powerquery
let
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          परिणाम
```

Result: 
```powerquery
फ़ंक्शन से 2017-4-1 और 2017-4-30 के बीच का डेटा मिलेगा
```


### Example #3
आज को 2017-6-15 मानकर, अब से लेकर अप्रैल 2017 तक का सारांश डेटा प्राप्त करें.
```powerquery
let
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          परिणाम
```

Result: 
```powerquery
फ़ंक्शन से 2017-4-1 से 2017-6-15 के बीच का डेटा मिलेगा
```



