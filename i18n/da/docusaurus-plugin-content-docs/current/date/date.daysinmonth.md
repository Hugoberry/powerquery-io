---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Returnerer et tal fra 28-31, som angiver antallet af dage i måneden.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Returnerer antallet af dage i måneden i værdien af typen `date`, `datetime` eller `datetimezone`, `dateTime`.

-   `dateTime`: En værdi af typen `date`, `datetime` eller `datetimezone`, som antallet af dage i måneden returneres for.


## Examples

### Example #1
Antallet af dage i december måned repræsenteret ved `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
