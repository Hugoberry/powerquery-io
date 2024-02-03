---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Indică dacă această dată cade într-un an bisect.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade într-un an bisect. <ul>        <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      </ul>


## Examples

### Example #1 
Determinaţi dacă anul 2012, reprezentat de &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; este un an bisect.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
