---
title: Date.AddQuarters
---

# Date.AddQuarters


Afegeix els trimestres especificats a la data.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Retorna el resultat `date`, `datetime` o `datetimezone` a partir d'afegir `numberOfQuarters` trimestres al valor `datetime` `dateTime`.

-   `dateTime`: el valor `date`, `datetime` o `datetimezone` al qual s'afegeixen trimestres.
-   `numberOfQuarters`: el nombre de trimestres que s'han d'afegir.


## Examples

### Example #1
Afegeix 1 trimestre al valor `date`, `datetime` o `datetimezone` que representa la data 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
