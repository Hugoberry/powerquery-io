---
title: Duration.Days
---

# Duration.Days


Returns the days portion of a duration.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Returns the days portion of <code>duration</code>.


## Examples

### Example #1 
Extract the number of days between two dates.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
