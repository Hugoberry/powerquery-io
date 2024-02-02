---
title: Date.AddYears
---

# Date.AddYears


## Description

Adds the specified years to the date.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Returns the <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> result of adding <code>numberOfYears</code> to a <code>datetime</code> value <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: The <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to which years are added.</li>        <li><code>numberOfYears</code>: The number of years to add.</li>      </ul>


## Examples

### Example #1 
Add 4 years to the &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, or &lt;code&gt;datetimezone&lt;/code&gt; value representing the date 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Add 10 years to the &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt;, or &lt;code&gt;datetimezone&lt;/code&gt; value representing the date and time of 5/14/2011 08:15:22 AM.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
