---
title: Time.Second
---

# Time.Second


Devolve o compoñente de segundo.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Devolve o compoñente de segundo do valor `time`, `datetime` ou `datetimezone` fornecido, `dateTime`.


## Examples

### Example #1
Busca o segundo valor dun valor de dataHora.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
