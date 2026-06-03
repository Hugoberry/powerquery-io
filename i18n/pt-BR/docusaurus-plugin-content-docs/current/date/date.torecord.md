---
title: Date.ToRecord
---

# Date.ToRecord


Retorna um registro contendo partes do valor date.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Retorna um registro contendo as partes do valor date especificado, `date`.

-   `date`: um valor `date` com base no qual o registro das partes será calculado.


## Examples

### Example #1
Converta o valor `#date(2011, 12, 31)` em um registro contendo parte do valor date.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
