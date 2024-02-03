---
title: Date.Day
---

# Date.Day


## Description

Returnează componenta day.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Returnează componenta zi a unei valori <code>date</code>, <code>datetime</code> sau <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> din care este extrasă componenta zi.</li>      </ul>


## Examples

### Example #1 
Obţineţi componenta day a unei valori &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; sau &lt;code&gt;datetimezone&lt;/code&gt; reprezentând data şi ora 14/05/2011 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
