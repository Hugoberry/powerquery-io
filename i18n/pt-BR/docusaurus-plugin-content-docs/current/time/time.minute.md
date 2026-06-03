---
title: Time.Minute
---

# Time.Minute


Retorna o componente de minuto.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Retorna o componente de minuto do valor `time`, `datetime` ou `datetimezone` fornecido, `dateTime`.


## Examples

### Example #1
Localize o minuto em #datetime (2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
