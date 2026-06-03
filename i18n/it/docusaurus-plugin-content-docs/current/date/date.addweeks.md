---
title: Date.AddWeeks
---

# Date.AddWeeks


Aggiunge le settimane specificate alla data.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Restituisce l'elemento `date`, `datetime` o `datetimezone` risultante dall'aggiunta di `numberOfWeeks` settimane al valore `dateTime` di `datetime`.

-   `dateTime`: il valore `date`, `datetime` o `datetimezone` a cui vengono aggiunte le settimane.
-   `numberOfWeeks`: il numero di settimane da aggiungere.


## Examples

### Example #1
Aggiungere 2 settimane al valore `date`, `datetime` o `datetimezone` che rappresenta la data 14/5/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
