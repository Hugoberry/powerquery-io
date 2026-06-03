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

Retorna o resultado de `date`, `datetime` ou `datetimezone` após adicionar `numberOfWeeks` semanas ao valor `datetime` `dateTime`.

-   `dateTime`: O valor `date`, `datetime` ou `datetimezone` ao qual as semanas estão sendo adicionadas.
-   `numberOfWeeks`: O número de semanas a serem adicionadas.


## Examples

### Example #1
Adicione 2 semanas ao valor `datetime`, `datetimezone` ou `date` que representa a data 14/5/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
