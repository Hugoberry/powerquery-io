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

Devolve o resultado de `date`, `datetime` ou `datetimezone` decorrente da adição de `numberOfQuarters` trimestres ao valor `datetime` `dateTime`.

-   `dateTime`: o valor `date`, `datetime` ou `datetimezone` ao qual estão a ser adicionados trimestres.
-   `numberOfQuarters`: o número de trimestres a adicionar.


## Examples

### Example #1
Adicionar 1 trimestre ao valor `date`, `datetime` ou `datetimezone` que representa a data 14/5/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
