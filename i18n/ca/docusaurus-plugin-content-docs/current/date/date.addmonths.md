---
title: Date.AddMonths
---

# Date.AddMonths


Afegeix els mesos especificats a la data.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Retorna el resultat `date`, `datetime` o `datetimezone` a partir d'afegir `numberOfMonths` mesos al valor `datetime` `dateTime`.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` al qual s'afegeixen mesos.
-   `numberOfMonths`: nombre de mesos que s'han d'afegir.


## Examples

### Example #1
Afegeix 5 mesos al valor `date`, `datetime` o `datetimezone` que representa la data 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Afegeix 18 mesos al valor `date`, `datetime` o `datetimezone` que representa la data i l'hora de 5/14/2011 08:15:22 am.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
