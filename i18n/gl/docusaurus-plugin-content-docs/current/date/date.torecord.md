---
title: Date.ToRecord
---

# Date.ToRecord


Devolve un rexistro que contén partes do valor de data.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Devolve un rexistro que contén as partes do valor date indicado, `date`.

-   `date`: un valor `date` a partir do que se debe calcular o rexistro das súas partes.


## Examples

### Example #1
Converter o valor `#date(2011, 12, 31)` nun rexistro que contén partes do valor de data.
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
