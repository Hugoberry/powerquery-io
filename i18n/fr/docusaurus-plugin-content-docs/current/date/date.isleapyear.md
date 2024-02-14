---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Indique si cette date se situe dans une année bissextile.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime spécifiée <code>dateTime</code> se situe dans une année bissextile. <ul>        <li><code>dateTime</code> : valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      </ul>


## Examples

### Example #1 
Détermine si l&#39;année 2012, telle que représentée par &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, est une année bissextile.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
