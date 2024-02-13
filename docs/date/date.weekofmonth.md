---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Returns a number from 1 to 6 indicating which week of the month this date falls in.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Returns a number from 1 to 6 indicating which week of the month the date <code>dateTime</code> falls in. <ul>        <li><code>dateTime</code>: A <code>datetime</code> value for which the week-of-the-month is determined.</li>      </ul>


## Examples

### Example #1 
Determine which week of March the 15th falls on in 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
