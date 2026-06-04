---
title: Date.AddWeeks
---

# Date.AddWeeks


Afegeix les setmanes especificades a la data.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Retorna el resultat `date`, `datetime` o `datetimezone` a partir d'afegir `numberOfWeeks` setmanes al valor `datetime` `dateTime`.

-   `dateTime`: el valor `date`, `datetime` o `datetimezone` al qual s'afegeixen setmanes.
-   `numberOfWeeks`: el nombre de setmanes que s'han d'afegir.


## Examples

### Example #1
Afegeix 2 setmanes al valor `date`, `datetime` o `datetimezone` que representa la data 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
