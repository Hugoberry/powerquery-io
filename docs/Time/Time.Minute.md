---
title: Time.Minute
---

# Time.Minute


## Description

Returns the minute component.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Returns the minute component of the provided <code>time</code>, <code>datetime</code>, or <code>datetimezone</code> value, <code>dateTime</code>.


## Examples

### Example #1 
Find the minute in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
