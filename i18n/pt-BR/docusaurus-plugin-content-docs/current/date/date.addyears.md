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

Retorna o resultado de `date`, `datetime` ou `datetimezone` após adicionar `numberOfYears` a um valor `datetime` `dateTime`.

-   `dateTime`: o valor `date`, `datetime` ou `datetimezone` ao qual os anos são adicionados.
-   `numberOfYears`: o número de anos a serem adicionados.


## Examples

### Example #1
Adicione 4 anos ao valor `datetime`, `datetimezone` ou `date` que representa a data 14/5/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Adicione 10 anos ao valor `datetime`, `datetimezone` ou `date` que representa a data e a hora 14/5/2011 08:15:22 AM.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
