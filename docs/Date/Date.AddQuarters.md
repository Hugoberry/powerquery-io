---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Adds the specified quarters to the date.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Returns the <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> result from adding <code>numberOfQuarters</code> quarters to the <code>datetime</code> value <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: The <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to which quarters are being added.</li>      <li><code>numberOfQuarters</code>: The number of quarters to add.</li>      </ul>


## Examples

### Example #1 
Add 1 quarter to the &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, or &lt;code&gt;datetimezone&lt;/code&gt; value representing the date 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
