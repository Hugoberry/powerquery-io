---
title: Date.AddDays
---

# Date.AddDays


## Description

Adds the specified days to the date.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Returns the <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> result from adding <code>numberOfDays</code> days to the <code>datetime</code> value <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: The <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to which days are being added.</li>      <li><code>numberOfDays</code>: The number of days to add.</li>      </ul>


## Examples

### Example #1 
Add 5 days to the &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, or &lt;code&gt;datetimezone&lt;/code&gt; value representing the date 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
