---
title: Date.AddDays
---

# Date.AddDays


Afegeix els dies especificats a la data.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Retorna el resultat `date`, `datetime` o `datetimezone` a partir d'afegir `numberOfDays` dies al valor `datetime` `dateTime`.

-   `dateTime`: el valor `date`, `datetime` o `datetimezone` al qual s'afegeixen dies.
-   `numberOfDays`: el nombre de dies que s'han d'afegir.


## Examples

### Example #1
Afegeix 5 dies al valor `date`, `datetime` o `datetimezone` que representa la data 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
