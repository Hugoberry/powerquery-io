---
title: Date.AddYears
---

# Date.AddYears


Aggiunge gli anni specificati alla data.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Restituisce l'elemento `date`, `datetime` o `datetimezone` risultante dall'aggiunta di `numberOfYears` al valore `dateTime` di `datetime`.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` a cui vengono aggiunti gli anni.
-   `numberOfYears`: numero di anni da aggiungere.


## Examples

### Example #1
Aggiungere 4 anni al valore `date`, `datetime` o `datetimezone` che rappresenta la data 14/5/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Aggiungere 10 anni al valore `date`, `datetime` o `datetimezone` che rappresenta la data 14/5/2011 e l'ora 08.15.22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
