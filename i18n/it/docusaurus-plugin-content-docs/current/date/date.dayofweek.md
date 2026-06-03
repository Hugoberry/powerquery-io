---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Restituisce un numero compreso tra 0 e 6 che indica il giorno della settimana del valore specificato.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Restituisce un numero compreso tra 0 e 6 che indica il giorno della settimana del valore specificato `dateTime`.

-   `dateTime`: valore `date`, `datetime` o `datetimezone`.
-   `firstDayOfWeek`: valore `Day` che indica il giorno da considerare come primo giorno della settimana. I valori consentiti sono Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday o Day.Saturday. Se non è specificato, viene usato un valore predefinito dipendente dalle impostazioni cultura.


## Examples

### Example #1
Ottenere il giorno della settimana rappresentato da lunedì 21 febbraio 2011, considerando domenica come primo giorno della settimana.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
Ottenere il giorno della settimana rappresentato da lunedì 21 febbraio 2011, considerando lunedì come primo giorno della settimana.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
