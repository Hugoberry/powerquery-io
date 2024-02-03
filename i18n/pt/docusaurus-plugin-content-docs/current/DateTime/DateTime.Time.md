---
title: DateTime.Time
---

# DateTime.Time


## Description

Returns the time part of the given datetime value.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Returns the time part of the given datetime value, <code>dateTime</code>.


## Examples

### Example #1 
Find the time value of #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
