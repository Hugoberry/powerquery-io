---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Adds the specified months to the date.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Returns the <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> result from adding <code>numberOfMonths</code> months to the <code>datetime</code> value <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: The <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to which months are being added.</li>        <li><code>numberOfMonths</code>: The number of months to add.</li>      </ul>


## Examples

### Example #1 
Add 5 months to the &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, or &lt;code&gt;datetimezone&lt;/code&gt; value representing the date 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Add 18 months to the &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, or &lt;code&gt;datetimezone&lt;/code&gt; value representing the date and time of 5/14/2011 08:15:22 AM.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
