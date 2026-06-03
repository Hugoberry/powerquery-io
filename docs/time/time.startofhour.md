---
title: Time.StartOfHour
---

# Time.StartOfHour


Returns the start of the hour.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Returns the start of the hour represented by `dateTime`. `dateTime` must be a `time`, `datetime` or `datetimezone` value.


## Examples

### Example #1
Find the start of the hour for October 10th, 2011, 8:10:32AM.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
