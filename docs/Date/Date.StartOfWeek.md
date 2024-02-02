---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Returns the start of the week.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Returns the start of the week that contains <code>dateTime</code>.    <code>dateTime</code> must be a <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value.


## Examples

### Example #1 
Find the start of the week for Tuesday, October 11th, 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Find the start of the week for Tuesday, October 11th, 2011, using Monday as the start of the week.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
