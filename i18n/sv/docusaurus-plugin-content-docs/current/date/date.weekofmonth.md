---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Returnerar ett tal från 1 till 6 som anger vilken vecka i månaden som datumet infaller under.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Returnerar ett tal från 1 till 6 som anger vilken vecka i månaden som datumet `dateTime` infaller i.

-   `dateTime`: Ett `datetime`\-värde från vilken vecka-i-månaden fastställs.


## Examples

### Example #1
Kontrollera vilken vecka som den 15 mars infaller under år 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
