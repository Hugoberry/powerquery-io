---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Azt jelzi, hogy ez a dátum szökőévre esik-e.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Azt jelzi, hogy a megadott <code>dateTime</code> datetime érték szökőévre esik-e. <ul>        <li><code>dateTime</code>: A kiértékelendő <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> érték.</li>      </ul>


## Examples

### Example #1 
Annak megállapítása, hogy a &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; érték által jelölt 2012-es év szökőév-e
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
