---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Devolve o inicio do trimestre.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Devolve o inicio do trimestre que contén `dateTime`. `dateTime` debe ser un valor de `date`, `datetime` ou `datetimezone`.


## Examples

### Example #1
Busca o inicio do trimestre do 10 de outubro de 2011 ás 08:00 horas.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
