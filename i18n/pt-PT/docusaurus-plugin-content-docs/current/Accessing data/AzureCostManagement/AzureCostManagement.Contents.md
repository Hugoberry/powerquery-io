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
Partindo do princípio que hoje é 15-06-2017, obter os resumos de dados entre 01-05-2017 e 15-06-2017
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
A função devolve os dados de resumo entre 01-05-2017 e 15-06-2017
```


### Example #2 
Partindo do princípio que hoje é 15-06-2017, obter os dados de resumo para abril de 2017.
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
A função devolve os dados entre 01-04-2017 e 30-04-2017
```


### Example #3 
Partindo do princípio que hoje é 15-06-2017, obter os dados de resumos de abril de 2017 até ao momento.
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
A função devolve os dados entre 01-04-2017 e 15-06-2017
```



