---
title: Date.AddDays
---

# Date.AddDays


Aggiunge i giorni specificati alla data.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Restituisce l'elemento `date`, `datetime` o `datetimezone` risultante dall'aggiunta di `numberOfDays` giorni al valore `dateTime` di `datetime`.

-   `dateTime`: il valore `date`, `datetime` o `datetimezone` a cui vengono aggiunti i giorni.
-   `numberOfDays`: il numero di giorni da aggiungere.


## Examples

### Example #1
Aggiungere 5 giorni al valore `date`, `datetime` o `datetimezone` che rappresenta la data 14/5/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
