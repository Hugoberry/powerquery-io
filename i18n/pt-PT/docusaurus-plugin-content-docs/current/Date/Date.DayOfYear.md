---
title: Date.DayOfYear
---

# Date.DayOfYear


Devolve um número entre 1 e 366 que representa o dia do ano.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Devolve um número que representa o dia do ano no valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> fornecido, <code>dateTime</code>.


## Examples

### Example #1 
O dia do ano para 1 de março de 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
