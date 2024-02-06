---
title: Date.AddWeeks
---

# Date.AddWeeks


Adds the specified weeks to the date.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Returns the <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> result from adding <code>numberOfWeeks</code> weeks to the <code>datetime</code> value <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: The <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to which weeks are being added.</li>      <li><code>numberOfWeeks</code>: The number of weeks to add.</li>      </ul>


## Examples

### Example #1 
Add 2 weeks to the &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, or &lt;code&gt;datetimezone&lt;/code&gt; value representing the date 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
