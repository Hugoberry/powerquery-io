---
title: Time.Hour
---

# Time.Hour


Devolve o compoñente de hora.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Devolve o compoñente de hora do valor `time`, `datetime` ou `datetimezone` fornecido, `dateTime`.


## Examples

### Example #1
Buscar a hora en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
