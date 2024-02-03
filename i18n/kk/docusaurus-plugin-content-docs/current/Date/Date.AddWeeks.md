---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Күнге көрсетілген апталарды қосады.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

<code>datetime</code> <code>dateTime</code> мәніне <code>numberOfWeeks</code> аптаны қосудан <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> нәтижесін қайтарады.      <ul>      <li><code>dateTime</code>: апталар қосылатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>numberOfWeeks</code>: қосатын апталар саны.</li>      </ul>


## Examples

### Example #1 
5/14/2011 күнін білдіретін &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; немесе &lt;code&gt;datetimezone&lt;/code&gt; мәніне 2 аптаны қосу.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
