---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Devolve un número que indica o trimestre do ano no que cae a data.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Devolve un número de 1 a 4 que indica o trimestre do ano no que cae a data `dateTime`. `dateTime` pode ser un valor `date`, `datetime` ou `datetimezone`.


## Examples

### Example #1
Buscar o trimestre do ano no que cae a data #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
