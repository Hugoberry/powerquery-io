---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Retorna o início do dia.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Retorna o início do dia representado por <code>dateTime</code>.    <code>dateTime</code> deve ser um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.


## Examples

### Example #1 
Encontre o início do dia para 10 de outubro de 2011, 8h.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
