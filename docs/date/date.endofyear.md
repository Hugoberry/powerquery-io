---
title: Date.EndOfYear
---

# Date.EndOfYear


Returns the end of the year.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

Returns the end of the year that contains <code>dateTime</code>, including fractional seconds. Time zone information is preserved.      <ul>        <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value from which the end of the year is calculated.</li>      </ul>


## Examples

### Example #1 
Get the end of the year for 5/14/2011 05:00:00 PM.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Get the end of hour for 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
