---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Returnerar ett tal från 1 till 54 som anger vilken vecka på året som datumet infaller under.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Returnerar en siffra från 1 till 54 som anger vilken vecka på året som datumet `dateTime` infaller.

-   `dateTime`: Ett `datetime`\-värde som veckan på året fastställs för.
-   `firstDayOfWeek`: Ett valfritt `Day.Type`\-värde som anger vilken dag som anses som början av en ny vecka (till exempel `Day.Sunday`). Om inget har angetts så används det kultuirberoende standardvärdet.


## Examples

### Example #1
Bestäm vilken vecka på året som innehåller den 27 mars 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Bestäm vilken vecka på året som innehåller den 27 mars 2011, med måndag som början på veckan.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
