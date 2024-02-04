---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Devolve o início do dia.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Devolve o início do dia representado por <code>dateTime</code>.    <code>dateTime</code> tem de ser um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.


## Examples

### Example #1 
Encontre o início do dia para 10 de outubro de 2011, às 08:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
