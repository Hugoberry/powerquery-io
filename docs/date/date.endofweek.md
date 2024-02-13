---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Returns the end of the week.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Returns the end of the week that contains <code>dateTime</code>.    This function takes an optional <code>Day</code>, <code>firstDayOfWeek</code>, to set as the first day of the week for this relative calculation. The default value is <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value from which the last day of the week is calculated</li>        <li><code>firstDayOfWeek</code>: <i>[Optional]</i> A <code>Day.Type</code> value representing the first day of the week. Possible values are <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> and <code>Day.Saturday.</code> . The default value is <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Get the end of the week for 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Get the end of the week for 5/17/2011 05:00:00 PM -7:00, with Sunday as the first day of the week.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
