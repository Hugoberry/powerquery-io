---
title: Time.Minute
---

# Time.Minute


Devuelve el componente de minutos.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Devuelve el componente de minutos del valor `time`, `datetime` o `datetimezone` proporcionado, `dateTime`.


## Examples

### Example #1
Buscar los minutos en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
