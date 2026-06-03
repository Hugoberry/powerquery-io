---
title: Date.AddYears
---

# Date.AddYears


Adiciona os anos especificados à data.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Devolve o resultado de `date`, `datetime` ou `datetimezone` decorrente da adição de `numberOfYears` a um valor `datetime` `dateTime`.

-   `dateTime`: o valor `date`, `datetime` ou `datetimezone` ao qual são adicionados anos.
-   `numberOfYears`: o número de anos a adicionar.


## Examples

### Example #1
Adicionar 4 anos ao valor `date`, `datetime` ou `datetimezone` que representa a data 14/5/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Adicionar 10 anos ao valor `date`, `datetime` ou `datetimezone` que representa a data e hora 14/5/2011 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
