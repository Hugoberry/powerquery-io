---
title: Date.StartOfDay
---

# Date.StartOfDay


Devolve o inicio do día.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Devolve o inicio do día representado por `dateTime`. `dateTime` debe ser un valor de `date`, `datetime` ou `datetimezone`.


## Examples

### Example #1
Busca o inicio do día do 10 de outubro de 2011 ás 08:00 horas.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
