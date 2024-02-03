---
title: Date.AddYears
---

# Date.AddYears


## Description

Күнге көрсетілген жылдарды қосады.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

<code>datetime</code> <code>dateTime</code> мәніне <code>numberOfYears</code> қосудан <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> нәтижесін қайтарады.      <ul>        <li><code>dateTime</code>: жылдар қосылатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>        <li><code>numberOfYears</code>: қосатын жылдар саны.</li>      </ul>


## Examples

### Example #1 
5/14/2011 күнін білдіретін &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; немесе &lt;code&gt;datetimezone&lt;/code&gt; мәніне 4 жылды қосу.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
5/14/2011 08:15:22 AM күнін және уақытын білдіретін &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; немесе &lt;code&gt;datetimezone&lt;/code&gt; мәніне 10 жылды қосу.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
