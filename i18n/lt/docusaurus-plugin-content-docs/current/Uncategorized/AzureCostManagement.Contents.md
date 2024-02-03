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
Tariant, kad šiandien yra 2017-06-15, gaunami laikotarpio nuo 2017-05-01 iki 2017-06-15 suvestinių duomenys
```powerquery
leisti
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      
          rezultate
```

Result: 
```powerquery
Funkcija pateiks suvestinių duomenis nuo 2017-05-01 iki 2017-06-15
```


### Example #2 
Tariant, kad šiandien yra 2017-06-15, gaunami 2017 m. balandžio mėn. suvestinių duomenys.
```powerquery
leisti
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      
          rezultate
```

Result: 
```powerquery
Funkcija pateiks duomenis nuo 2017-04-01 iki 2017-04-30
```


### Example #3 
Tariant, kad šiandien yra 2017-06-15, gaunami suvestinių duomenys nuo 2017 m. balandžio mėn. iki šiandien.
```powerquery
leisti
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      
          rezultate
```

Result: 
```powerquery
Funkcija pateiks duomenis nuo 2017-04-01 iki 2017-06-15
```



