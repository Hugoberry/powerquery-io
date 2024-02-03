---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Adaugă lunile specificate la dată.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Returnează rezultatul <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> din adăugarea a <code>numberOfMonths</code> luni la valoarea <code>datetime</code><code>dateTime</code>.      <ul>        <li><code>dateTime</code>: valoarea <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> la care sunt adăugate luni.</li>        <li><code>numberOfMonths</code>: numărul de luni de adăugat.</li>      </ul>


## Examples

### Example #1 
Adăugaţi 5 luni la valoarea &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; sau &lt;code&gt;datetimezone&lt;/code&gt; reprezentând data 14/05/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Adăugaţi 18 luni la valoarea &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; sau &lt;code&gt;datetimezone&lt;/code&gt; reprezentând data şi ora 14/05/2011 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
