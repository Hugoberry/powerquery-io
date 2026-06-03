---
title: Date.AddQuarters
---

# Date.AddQuarters


Aggiunge i trimestri specificati alla data.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Restituisce l'elemento `date`, `datetime` o `datetimezone` risultante dall'aggiunta di `numberOfQuarters` trimestri al valore `dateTime` di `datetime`.

-   `dateTime`: il valore `date`, `datetime` o `datetimezone` a cui vengono aggiunti i trimestri.
-   `numberOfQuarters`: il numero di trimestri da aggiungere.


## Examples

### Example #1
Aggiungere 1 trimestre al valore `date`, `datetime` o `datetimezone` che rappresenta la data 14/5/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
