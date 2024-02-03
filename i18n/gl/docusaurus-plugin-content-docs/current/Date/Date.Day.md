---
title: Date.Day
---

# Date.Day


## Description

Devolve o compoñente de día.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Devolve o compoñente de día dun valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a partir do que se extrae o compoñente de día.</li>      </ul>


## Examples

### Example #1 
Obter o compoñente de día dun valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; que representa a data e a hora 14/05/2011 05:00:00 p.m.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
