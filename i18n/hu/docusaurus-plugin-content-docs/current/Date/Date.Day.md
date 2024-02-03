---
title: Date.Day
---

# Date.Day


## Description

A nap összetevőt adja vissza.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Egy <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték nap összetevőjét adja vissza.      <ul>        <li><code>dateTime</code>: Egy <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> érték, amelyből a nap összetevő ki lesz nyerve.</li>      </ul>


## Examples

### Example #1 
A 2011. 05. 14., 17:00:00 dátumot és időt jelölő &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vagy &lt;code&gt;datetimezone&lt;/code&gt; típusú érték nap összetevőjének megállapítása
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
