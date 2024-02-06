---
title: Date.Day
---

# Date.Day


Returns the day component.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Returns the day component of a <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value.      <ul>        <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value from which the day component is extracted.</li>      </ul>


## Examples

### Example #1 
Get the day component of a &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, or &lt;code&gt;datetimezone&lt;/code&gt; value representing the date and time of 5/14/2011 05:00:00 PM.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
