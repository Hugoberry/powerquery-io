---
title: Time.StartOfHour
---

# Time.StartOfHour


Retorna o início da hora.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Retorna o início da hora representado por `dateTime`. `dateTime` deve ser um valor `time`, `datetime` ou `datetimezone`.


## Examples

### Example #1
Encontre o início da hora para 10 de outubro de 2011, 8h10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
