---
title: Date.AddDays
---

# Date.AddDays


## Description

Күнге көрсетілген күндерді қосады.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

<code>datetime</code> <code>dateTime</code> мәніне <code>numberOfDays</code> күнді қосудан <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> нәтижесін қайтарады.      <ul>      <li><code>dateTime</code>: күндер қосылатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>numberOfDays</code>: қосатын күндер саны.</li>      </ul>


## Examples

### Example #1 
5/14/2011 күнін білдіретін &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; немесе &lt;code&gt;datetimezone&lt;/code&gt; мәніне 5 күнді қосу.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
