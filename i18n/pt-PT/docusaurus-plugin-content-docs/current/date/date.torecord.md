---
title: Date.ToRecord
---

# Date.ToRecord


Devolve um registo que contém as partes do valor date.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Devolve um registo que contém as partes do valor date especificado, `date`.

-   `date`: um valor `date` a partir do qual o registo das partes correspondentes deverá ser calculado.


## Examples

### Example #1
Converter o valor `#date(2011, 12, 31)` num registo que contém partes do valor date.
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
