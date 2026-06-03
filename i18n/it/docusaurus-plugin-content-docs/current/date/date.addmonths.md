---
title: Date.AddMonths
---

# Date.AddMonths


Aggiunge i mesi specificati alla data.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Restituisce l'elemento `date`, `datetime` o `datetimezone` risultante dall'aggiunta di `numberOfMonths` mesi al valore `dateTime` di `datetime`.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` a cui vengono aggiunti i mesi.
-   `numberOfMonths`: numero di mesi da aggiungere.


## Examples

### Example #1
Aggiungere 5 mesi al valore `date`, `datetime` o `datetimezone` che rappresenta la data 14/5/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Aggiungere 18 mesi al valore `date`, `datetime` o `datetimezone` che rappresenta la data 14/5/2011 e l'ora 08.15.22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
