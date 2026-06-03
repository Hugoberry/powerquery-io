---
title: Date.AddDays
---

# Date.AddDays


Adiciona os dias especificados à data.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Devolve o resultado de `date`, `datetime` ou `datetimezone` decorrente da adição de `numberOfDays` dias ao valor `datetime` `dateTime`.

-   `dateTime`: o valor `date`, `datetime` ou `datetimezone` ao qual estão a ser adicionados dias.
-   `numberOfDays`: o número de dias a adicionar.


## Examples

### Example #1
Adicionar 5 dias ao valor `date`, `datetime` ou `datetimezone` que representa a data 14/5/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
