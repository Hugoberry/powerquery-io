---
title: Date.AddYears
---

# Date.AddYears


Afegeix els anys especificats a la data.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Retorna el resultat `date`, `datetime` o `datetimezone` a partir d'afegir `numberOfYears` a un valor `datetime` `dateTime`.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` al qual s'afegeixen anys.
-   `numberOfYears`: nombre d'anys que s'han d'afegir.


## Examples

### Example #1
Afegeix 4 anys al valor `date`, `datetime` o `datetimezone` que representa la data 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Afegeix 10 anys al valor `date`, `datetime` o `datetimezone` que representa la data i l'hora de 5/14/2011 08:15:22 am.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
