---
title: Time.Hour
---

# Time.Hour


Devolve o componente de hora.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Devolve o componente de hora do valor <code>time</code>, <code>datetime</code> ou <code>datetimezone</code> fornecido, <code>dateTime</code>.


## Examples

### Example #1 
Encontrar a hora em #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
