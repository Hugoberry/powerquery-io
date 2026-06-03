---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Restituisce un numero da 1 a 54 che indica la settimana dell'anno in cui cade questa data.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Restituisce un numero da 1 a 54 che indica la settimana dell'anno in cui cade la data `dateTime`.

-   `dateTime`: valore `datetime` per cui viene determinata la settimana dell'anno.
-   `firstDayOfWeek`: valore `Day.Type` facoltativo che indica quale giorno viene considerato come inizio di una nuova settimana, ad esempio `Day.Sunday`. Se non è specificato, viene usato un valore predefinito dipendente dalle impostazioni cultura.


## Examples

### Example #1
Determinare quale settimana dell'anno contiene il 27 marzo 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Determinare in quale settimana dell'anno contiene il 27 marzo 2011, usando il lunedì come inizio di una settimana.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
