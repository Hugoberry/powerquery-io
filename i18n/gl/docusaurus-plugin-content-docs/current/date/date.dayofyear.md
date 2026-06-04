---
title: Date.DayOfYear
---

# Date.DayOfYear


Devolve un número de 1 a 366 que representa o día do ano.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Devolve un número que representa o día do ano no valor `date`, `datetime` ou `datetimezone` fornecido, `dateTime`.


## Examples

### Example #1
Día do ano do 1 de marzo de 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
