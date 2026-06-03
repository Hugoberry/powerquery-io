---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Returnerar ett tal från 28 till 31 som anger antalet dagar i månaden.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Returnerar antalet dagar i månaden i `date`\-, `datetime`\- eller `datetimezone`\-värdet `dateTime`.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som antalet dagar i månaden returneras för.


## Examples

### Example #1
Antal dagar i december månad som representeras av `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
