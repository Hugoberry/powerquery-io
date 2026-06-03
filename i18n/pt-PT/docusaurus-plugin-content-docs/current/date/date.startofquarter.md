---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Devolve o início do trimestre.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Devolve o início do trimestre que contém `dateTime`. `dateTime` tem de ser um valor `date`, `datetime` ou `datetimezone`.


## Examples

### Example #1
Encontre o início do trimestre para 10 de outubro de 2011, às 08:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
