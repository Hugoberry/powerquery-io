---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Gibt das Ende der Woche zurück.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Gibt das Ende der Woche, das `dateTime` enthält, zurück. Diese Funktion akzeptiert einen optionalen `Day`\-Wert (`firstDayOfWeek`), um den ersten Tag der Woche für diese relative Berechnung festzulegen. Der Standardwert lautet `Day.Sunday`.

-   `dateTime`: Ein Wert für `date`, `datetime` oder `datetimezone`, aus dem der letzte Tag der Woche
-   `firstDayOfWeek`: *(Optional)* Ein Wert für `Day.Type`, der den ersten Tag der Woche darstellt. Mögliche Werte sind `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` and `Day.Saturday`. Der Standardwert ist `Day.Sunday`.


## Examples

### Example #1
Ruft das Ende der Woche für den 14.05.2011 ab.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Ruft das Ende der Woche für den 17.05.2011, 17:00:00 Uhr (-7:00) ab, wobei Sonntag als erster Wochentag festgelegt ist.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
