---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Retorna un nombre que indica en quin trimestre de l'any cau la data.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Retorna un nombre de l'1 al 4 que indica en quin trimestre de l'any cau la data `dateTime`. `dateTime` pot ser un valor `date`, `datetime` o `datetimezone`.


## Examples

### Example #1
Troba en quin trimestre de l'any cau la data #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
