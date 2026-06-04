---
title: Date.DayOfYear
---

# Date.DayOfYear


Жылдың күнін көрсететін 1 мен 366 арасындағы санды қайтарады


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Көрсетілген `date`, `datetime` немесе `datetimezone` мәнінде жылдың күнін білдіретін санды қайтарады, `dateTime`.


## Examples

### Example #1
2011 жылғы 1 наурызға арналған жыл күні.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
