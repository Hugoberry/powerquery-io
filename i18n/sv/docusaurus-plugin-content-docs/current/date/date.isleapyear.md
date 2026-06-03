---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Anger om det här datumet infaller under ett skottår.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Anger om det givna datetime-värdet `dateTime` infaller under ett skottår.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Kontrollera om år 2012, representerat av `#date(2012, 01, 01)`, är ett skottår.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
