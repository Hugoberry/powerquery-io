---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Devolve o fim do trimestre.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Devolve o fim do trimestre que contém `dateTime`. As informações de fuso horário são preservadas.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a partir do qual o fim do trimestre é calculado.


## Examples

### Example #1
Encontre o fim do trimestre para 10 de outubro de 2011, às 08:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
