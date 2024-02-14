---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Indica si esta fecha cae en año bisiesto.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime especificado <code>dateTime</code> cae en año bisiesto. <ul>        <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que se evaluará.</li>      </ul>


## Examples

### Example #1 
Determinar si el año 2012, según se representa en &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, es un año bisiesto.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
