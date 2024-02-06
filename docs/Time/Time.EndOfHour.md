---
title: Time.EndOfHour
---

# Time.EndOfHour


Returns the end of the hour.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Returns the end of the hour represented by <code>dateTime</code>, including fractional seconds. Time zone information is preserved.      <ul>        <li><code>dateTime</code>: A <code>time</code>, <code>datetime</code>, or <code>datetimezone</code> value from which the end of the hour is calculated.</li>      </ul>


## Examples

### Example #1 
Get the end of the hour for 5/14/2011 05:00:00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Get the end of the hour for 5/17/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
