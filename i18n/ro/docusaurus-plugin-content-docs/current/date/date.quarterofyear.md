---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Returnează un număr care indică în ce trimestru al anului cade data.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Returnează un număr de la 1 la 4 care indică în ce trimestru al anului cade data `dateTime`. `dateTime` poate fi o valoare `date`, `datetime` sau `datetimezone`.


## Examples

### Example #1
Găsiţi în ce trimestru al anului cade data #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
