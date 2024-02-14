---
title: Time.Minute
---

# Time.Minute


Devolve o componente de minutos.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Devolve o componente de minutos do valor <code>time</code>, <code>datetime</code> ou <code>datetimezone</code> fornecido, <code>dateTime</code>.


## Examples

### Example #1 
Encontrar os minutos em #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
