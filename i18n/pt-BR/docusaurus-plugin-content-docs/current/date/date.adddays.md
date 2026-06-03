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

Retorna o resultado de `date`, `datetime` ou `datetimezone` após adicionar `numberOfDays` dias ao valor `datetime` `dateTime`.

-   `dateTime`: O valor `date`, `datetime` ou `datetimezone` ao qual os dias estão sendo adicionados.
-   `numberOfDays`: O número de dias a serem adicionados.


## Examples

### Example #1
Adicione 5 dias ao valor `datetime`, `datetimezone` ou `date` que representa a data 14/5/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
