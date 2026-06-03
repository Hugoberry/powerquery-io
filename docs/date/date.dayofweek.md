---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Returns a number (from 0 to 6) indicating the day of the week of the provided value.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Returns a number (from 0 to 6) indicating the day of the week of the provided `dateTime`.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value.
-   `firstDayOfWeek`: A `Day` value indicating which day should be considered the first day of the week. Allowed values are Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday, or Day.Saturday. If unspecified, a culture-dependent default is used.


## Examples

### Example #1
Get the day of the week represented by Monday, February 21st, 2011, treating Sunday as the first day of the week.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
Get the day of the week represented by Monday, February 21st, 2011, treating Monday as the first day of the week.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
