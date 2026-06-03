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

Devolve o componente de minutos do valor `time`, `datetime` ou `datetimezone` fornecido, `dateTime`.


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
