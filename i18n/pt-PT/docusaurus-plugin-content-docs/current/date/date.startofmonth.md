---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Devolve o início do mês.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Devolve o início do mês que contém <code>dateTime</code>.    <code>dateTime</code> tem de ser um valor <code>date</code> ou <code>datetime</code>.


## Examples

### Example #1 
Encontre o início do mês para 10 de outubro de 2011, às 08:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
