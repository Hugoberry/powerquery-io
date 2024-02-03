---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Күнге көрсетілген тоқсандарды қосады.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

<code>datetime</code> <code>dateTime</code> мәніне <code>numberOfQuarters</code> тоқсанды қосудан <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> нәтижесін қайтарады.      <ul>      <li><code>dateTime</code>: тоқсандар қосылып жатқан <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      <li><code>numberOfQuarters</code>: қосатын тоқсандар саны.</li>      </ul>


## Examples

### Example #1 
5/14/2011 күнін білдіретін &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; немесе &lt;code&gt;datetimezone&lt;/code&gt; мәніне 1 тоқсанды қосу.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
