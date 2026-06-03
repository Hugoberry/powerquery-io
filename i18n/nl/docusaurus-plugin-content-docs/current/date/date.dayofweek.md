---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Hiermee wordt een getal (van 0 tot en met 6) geretourneerd waarmee de dag van de week wordt aangegeven van de opgegeven waarde.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Hiermee wordt een getal (van 0 tot en met 6) geretourneerd waarmee de dag van de week wordt aangeduid van de opgegeven `dateTime`.

-   `dateTime`: Een waarde voor `date`, `datetime` of `datetimezone`.
-   `firstDayOfWeek`: Een waarde voor `Day` waarmee wordt aangegeven welke dag moet worden gezien als de eerste dag van de week. Toegestane waarden zijn Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday en Day.Saturday. Als deze waarde niet wordt opgegeven, wordt een cultuurafhankelijke standaard gebruikt.


## Examples

### Example #1
De dag van de week ophalen die wordt vertegenwoordigd door 21 februari 2011, waarbij zondag wordt gezien als de eerste dag van de week.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
De dag van de week ophalen die wordt vertegenwoordigd door maandag 21 februari 2011, waarbij maandag wordt gezien als de eerste dag van de week.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
