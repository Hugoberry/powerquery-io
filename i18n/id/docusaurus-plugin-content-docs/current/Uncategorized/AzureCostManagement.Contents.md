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
Asumsikan hari ini adalah 15-6-2017, dapatkan data ringkasan dari 1-5-2017 hingga 15-6-2017
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
Fungsi akan mengembalikan data ringkasan dari 1-5-2017 hingga 15-6-2017
```


### Example #2 
Asumsikan hari ini adalah 15-6-2017, dapatkan data ringkasan untuk April 2017.
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
Fungsi akan mengembalikan data dari 1-4-2017 hingga 30-4-2017
```


### Example #3 
Asumsikan hari ini adalah 15-6-2017, dapatkan data ringkasan dari April 2017 sampai sekarang.
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
Fungsi akan mengembalikan data dari 1-4-2017 hingga 15-6-2017
```



