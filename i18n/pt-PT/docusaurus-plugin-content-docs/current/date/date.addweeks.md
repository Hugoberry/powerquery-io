---
title: Date.AddWeeks
---

# Date.AddWeeks


Adiciona as semanas especificadas à data.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Devolve o resultado de `date`, `datetime` ou `datetimezone` decorrente da adição de `numberOfWeeks` semanas ao valor `datetime` `dateTime`.

-   `dateTime`: o valor `date`, `datetime` ou `datetimezone` ao qual estão a ser adicionadas semanas.
-   `numberOfWeeks`: o número de semanas a adicionar.


## Examples

### Example #1
Adicionar 2 semanas ao valor `date`, `datetime` ou `datetimezone` que representa a data 14/5/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
