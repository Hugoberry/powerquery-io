---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Indica se esta data cae nun ano bisesto.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Indica se o valor datetime <code>dateTime</code> indicado cae nun ano bisesto. <ul>        <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> que se vai avaliar.</li>      </ul>


## Examples

### Example #1 
Determinar se o ano 2012, representado por &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, é un ano bisesto.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
