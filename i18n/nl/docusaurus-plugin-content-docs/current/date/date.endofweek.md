---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Retourneert het einde van de week.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Hiermee wordt het einde van de week in de opgegeven die `dateTime` bevat. Deze functie gebruikt een optionele `Day`, `firstDayOfWeek`, om de eerste dag van de week in te stellen voor deze relatieve berekening. De standaardwaarde is `Day.Sunday`.

-   `dateTime`: een `date`\-, `datetime`\- of `datetimezone`\-waarde op basis waarvan de laatste dag van de week wordt berekend
-   `firstDayOfWeek`: *\[optioneel\]* een `Day.Type`\-waarde die de eerste dag van de week aanduidt. Mogelijke waarden zijn `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` en `Day.Saturday.`. De standaardwaarde is `Day.Sunday`.


## Examples

### Example #1
Het einde van de week ophalen voor 14/5/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Het einde van de week ophalen voor 17/5/2011 05:00:00 PM -7:00, met zondag als de eerste dag van de week.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
