---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Restituisce la fine della settimana.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Restituisce la fine della settimana contenente `dateTime`. Questa funzione accetta un valore facoltativo per `Day`, `firstDayOfWeek`, da impostare come primo giorno della settimana per il relativo calcolo. Il valore predefinito è `Day.Sunday`.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da cui viene calcolato l'ultimo giorno della settimana
-   `firstDayOfWeek`: *(facoltativo)* valore `Day.Type` che rappresenta il primo giorno della settimana. I valori possibili sono `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` e `Day.Saturday`. Il valore predefinito è `Day.Sunday`.


## Examples

### Example #1
Ottenere la fine della settimana per 14/5/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Ottenere la fine della settimana per il 17/5/2011 05.00.00 -7.00, con domenica come primo giorno della settimana.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
