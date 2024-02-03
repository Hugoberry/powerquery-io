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
Katakan hari ini ialah 2017-6-15, dapatkan data ringkasan antara 2017-5-1 hingga 2017-6-15
```powerquery
biarkan
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      dalam
          keputusan
```

Result: 
```powerquery
Fungsi akan mengembalikan data antara 2017-5-1 hingga 2017-6-15
```


### Example #2 
Katakan hari ini ialah 2017-6-15, dapatkan data ringkasan untuk April 2017.
```powerquery
biarkan
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      dalam
          keputusan
```

Result: 
```powerquery
Fungsi akan mengembalikan data antara 2017-4-1 dan 2017-4-30
```


### Example #3 
Katakan hari ini ialah 2017-6-15, dapatkan data ringkasan dari April 2017 hingga sekarang.
```powerquery
biarkan
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      dalam
          keputusan
```

Result: 
```powerquery
Fungsi akan mengembalikan data antara 2017-4-1 dan 2017-6-15
```



