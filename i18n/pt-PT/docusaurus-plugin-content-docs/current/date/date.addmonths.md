---
title: Date.AddMonths
---

# Date.AddMonths


Adiciona os meses especificados à data.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Devolve o resultado de `date`, `datetime` ou `datetimezone` decorrente da adição de `numberOfMonths` meses ao valor `datetime` `dateTime`.

-   `dateTime`: o valor `date`, `datetime` ou `datetimezone` ao qual estão a ser adicionados meses.
-   `numberOfMonths`: o número de meses a adicionar.


## Examples

### Example #1
Adicionar 5 meses ao valor `date`, `datetime` ou `datetimezone` que representa a data 14/5/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Adicionar 18 meses ao valor `date`, `datetime` ou `datetimezone` que representa a data e hora 14/5/2011 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
