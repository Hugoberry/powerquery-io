---
title: Date.AddQuarters
---

# Date.AddQuarters


Adiciona os trimestres especificados à data.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Retorna o resultado de `date`, `datetime` ou `datetimezone` após adicionar `numberOfQuarters` trimestres ao valor `datetime` `dateTime`.

-   `dateTime`: O valor `date`, `datetime` ou `datetimezone` ao qual os trimestres estão sendo adicionados.
-   `numberOfQuarters`: O número de trimestres a serem adicionados.


## Examples

### Example #1
Adicione 1 trimestre ao valor `datetime`, `datetimezone` ou `date` que representa a data 14/5/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
