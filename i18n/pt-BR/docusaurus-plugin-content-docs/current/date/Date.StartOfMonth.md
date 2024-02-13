---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Retorna o início do mês.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Retorna o início do mês que contém <code>dateTime</code>.    <code>dateTime</code> deve ser um valor <code>date</code> ou <code>datetime</code>.


## Examples

### Example #1 
Encontre o início do mês de 10 de outubro de 2011, 8h10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
