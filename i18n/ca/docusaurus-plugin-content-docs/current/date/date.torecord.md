---
title: Date.ToRecord
---

# Date.ToRecord


Retorna un registre que conté parts del valor date.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Retorna un registre que conté les parts del valor date proporcionat, `date`.

-   `date`: valor `date` a partir del qual s'ha de calcular el registre de les seves parts.


## Examples

### Example #1
Converteix el valor `#date(2011, 12, 31)` en un registre que conté parts del valor date.
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
