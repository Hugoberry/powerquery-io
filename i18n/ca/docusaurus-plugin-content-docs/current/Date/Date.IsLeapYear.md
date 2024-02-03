---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Indica si aquesta data cau en un any de traspàs.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Indica si el valor datetime <code>dateTime</code> proporcionat s'escau en un any de traspàs. <ul>        <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      </ul>


## Examples

### Example #1 
Determina si l&#39;any 2012, representat per &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, és un any de traspàs.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
