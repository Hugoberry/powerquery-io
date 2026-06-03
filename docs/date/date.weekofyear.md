---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Returns a number from 1 to 54 indicating which week of the year this date falls in.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Returns a number from 1 to 54 indicating which week of the year the date, `dateTime`, falls in.

-   `dateTime`: A `datetime` value for which the week-of-the-year is determined.
-   `firstDayOfWeek`: An optional `Day.Type` value that indicates which day is considered the start of a new week (for example, `Day.Sunday`). If unspecified, a culture-dependent default is used.


## Examples

### Example #1
Determine which week of the year contains March 27th, 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Determine which week of the year contains March 27th, 2011, using Monday as the start of the week.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
