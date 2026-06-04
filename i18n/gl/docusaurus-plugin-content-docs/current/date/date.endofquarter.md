---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Devolve o final do trimestre.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Devolve o final do trimestre que contén `dateTime`. Consérvase a información do fuso horario.

-   `dateTime`: Un valor de `data`, `datetime` ou `datetimezone` a partir do cal se calcula o final do trimestre.


## Examples

### Example #1
Busca o final do trimestre do 10 de outubro de 2011 ás 08:00 horas.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
