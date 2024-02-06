---
title: Date.DayOfYear
---

# Date.DayOfYear


Returns a number from 1 to 366 representing the day of the year.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Returns a number representing the day of the year in the provided <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value, <code>dateTime</code>.


## Examples

### Example #1 
The day of the year for March 1st, 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
