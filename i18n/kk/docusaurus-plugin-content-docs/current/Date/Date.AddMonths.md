---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Күнге көрсетілген айларды қосады.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

<code>datetime</code> <code>dateTime</code> мәніне <code>numberOfMonths</code> айды қосудан <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> нәтижесін қайтарады.      <ul>        <li><code>dateTime</code>: айлар қосылатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>        <li><code>numberOfMonths</code>: қосатын айлар саны.</li>      </ul>


## Examples

### Example #1 
5/14/2011 күнін білдіретін &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; немесе &lt;code&gt;datetimezone&lt;/code&gt; мәніне 5 айды қосу.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
5/14/2011 08:15:22 AM күнін және уақытын білдіретін &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; немесе &lt;code&gt;datetimezone&lt;/code&gt; мәніне 18 айды қосу.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
