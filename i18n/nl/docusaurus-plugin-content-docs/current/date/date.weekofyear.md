---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Retourneert een getal van 1 tot 54 dat aangeeft in welke week van het jaar deze datum valt.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Hiermee wordt een getal van 1 tot 54 geretourneerd dat aangeeft in welke week van het jaar de datum `dateTime` valt.

-   `dateTime`: Een `datetime`\-waarde waarvoor de week van het jaar wordt vastgesteld.
-   `firstDayOfWeek`: Een optionele `Day.Type` -waarde die aangeeft welke dag wordt beschouwd als het begin van een nieuwe week (bijvoorbeeld `Day.Sunday`). Als u niets opgeeft, wordt een cultuurafhankelijke standaard gebruikt.


## Examples

### Example #1
Bepalen welke week van het jaar 27 maart 2011 bevat.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Bepalen welke week van het jaar 27 maart 2011 bevat, met maandag als begin van de week.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
