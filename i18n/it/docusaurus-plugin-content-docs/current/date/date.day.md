---
title: Date.Day
---

# Date.Day


Restituisce il componente dei giorni.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Restituisce il componente giorno di un valore `date`, `datetime` o `datetimezone`.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da cui viene estratto il componente giorno.


## Examples

### Example #1
Ottenere il componente giorno di un valore `date`, `datetime` o `datetimezone` che rappresenta la data 14/5/2011 e l'ora 17.00.00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
