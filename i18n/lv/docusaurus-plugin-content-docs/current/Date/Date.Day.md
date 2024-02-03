---
title: Date.Day
---

# Date.Day


## Description

Atgriež dienas komponentu.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Atgriež <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtības dienas komponentu.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, no kuras tiek izgūts dienas komponents.</li>      </ul>


## Examples

### Example #1 
Iegūt dienas komponentu &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vai &lt;code&gt;datetimezone&lt;/code&gt; vērtībai, kas apzīmē datumu un laiku 14.05.2011. plkst. 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
