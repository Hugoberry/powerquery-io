---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Returns a number from 28 to 31 indicating the number of days in the month.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Returns the number of days in the month in the <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value <code>dateTime</code>. <ul>        <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value for which the number of days in the month is returned.</li>      </ul>


## Examples

### Example #1 
Number of days in the month December as represented by &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
