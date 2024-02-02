---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Returns the end of the day.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

Returns the end of the day represented by <code>dateTime</code>. Time zone information is preserved.      <ul>        <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value from from which the end of the day is calculated.</li>      </ul>


## Examples

### Example #1 
Get the end of the day for 5/14/2011 05:00:00 PM.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Get the end of the day for 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
