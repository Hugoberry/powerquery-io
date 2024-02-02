---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Returns the end of the month.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Returns the end of the month that contains <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value from which the end of the month is calculated</li>      </ul>


## Examples

### Example #1 
Get the end of the month for 5/14/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Get the end of the month for 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
