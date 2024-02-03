---
title: Date.Day
---

# Date.Day


## Description

Retorna el component dia.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Retorna el component dia d'un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> del qual s'extreu el component dia.</li>      </ul>


## Examples

### Example #1 
Obté el component dia d&#39;un valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la data i l&#39;hora de 5/14/2011 05:00:00 pm.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
