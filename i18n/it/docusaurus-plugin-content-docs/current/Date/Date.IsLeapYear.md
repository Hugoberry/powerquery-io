---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Indica se la data cade in un anno bisestile.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato <code>dateTime</code> cade in un anno bisestile. <ul>        <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      </ul>


## Examples

### Example #1 
Determina se l&#39;anno 2012, come rappresentato da &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; è un anno bisestile.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
