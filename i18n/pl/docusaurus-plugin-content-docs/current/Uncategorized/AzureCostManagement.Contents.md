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
Zakładając, że bieżąca data to 2017-06-15, pobierz dane podsumowań z okresu od 2017-05-01 do 2017-06-15
```powerquery
pozwól, aby    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          miał wynik = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)   
      w wyniku

```

Result: 
```powerquery
Funkcja zwróci dane podsumowań z okresu od 2017-05-01 do 2017-06-15
```


### Example #2 
Zakładając, że bieżąca data to 2017-06-15, pobierz dane podsumowań z kwietnia 2017 r.
```powerquery
pozwól, aby    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          miał wynik = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)   
      w wyniku     

```

Result: 
```powerquery
Funkcja zwróci dane z okresu od 2017-04-01 do 2017-04-30
```


### Example #3 
Zakładając, że bieżąca data to 2017-06-15, pobierz dane podsumowań z okresu od kwietnia 2017 r. do chwili obecnej.
```powerquery
pozwól, aby    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          miał wynik = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)   
      w wyniku
          result
```

Result: 
```powerquery
Funkcja zwróci dane z okresu od 2017-04-01 do 2017-06-15
```



