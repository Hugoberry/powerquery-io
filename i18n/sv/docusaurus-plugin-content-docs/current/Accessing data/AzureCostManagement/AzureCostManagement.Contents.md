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
Om vi antar att idag är 2017-06-15, hämta sammanfattningsdata mellan 2017-05-01 till 2017-06-15
```powerquery
låt    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          resultat = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)   
      i
          resultat
```

Result: 
```powerquery
Funktionen kommer att returnera sammanfattningsdata mellan 2017-05-01 och 2017-06-15
```


### Example #2 
Om vi antar att idag är 2017-06-15, hämta sammanfattningsdata för april 2017.
```powerquery
låt    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          resultat = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)   
      i
          resultat
```

Result: 
```powerquery
Funktionen kommer att returnera data mellan 2017-04-01 och 2017-04-30
```


### Example #3 
Om vi antar att idag är 2017-06-15, hämta sammanfattningsdata från april 2017 fram tills nu.
```powerquery
låt    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Sammanfattningar" ],
          resultat = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)   
      i
          resultat
```

Result: 
```powerquery
Funktionen kommer att returnera data mellan 2017-04-01 och 2017-06-15
```



