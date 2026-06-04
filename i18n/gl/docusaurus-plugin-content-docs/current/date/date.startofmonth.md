---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Devolve o inicio do mes.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Devolve o inicio do mes que contén `dateTime`. `dateTime` debe ser un valor de `data` ou `datetime`.


## Examples

### Example #1
Busca o inicio do mes do 10 de outubro de 2011 ás 08:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
