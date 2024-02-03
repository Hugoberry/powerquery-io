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
Supondo que hoje seja 15/6/2017, obter dados de resumos entre 1/5/2017 e 15/6/2017
```powerquery
deixe
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          resultado = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      em
          resultado
```

Result: 
```powerquery
A função retornará dados de resumos entre 1/5/2017 e 15/6/2017
```


### Example #2 
Supondo que hoje seja 15/6/2017, obter dados de resumos de abril de 2017.
```powerquery
deixe
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          resultado = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      em
          resultado
```

Result: 
```powerquery
A função retornará dados entre 1/4/2017 e 30/4/2017
```


### Example #3 
Supondo que hoje seja 15/6/2017, obter dados de resumos de abril de 2017 até o momento.
```powerquery
deixe
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Resumos" ],
          resultado = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      em
          resultado
```

Result: 
```powerquery
A função retornará dados entre 1/4/2017 e 15/6/2017
```



