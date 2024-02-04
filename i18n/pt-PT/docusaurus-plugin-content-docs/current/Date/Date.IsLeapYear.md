---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Indica se esta data recai num ano bissexto.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Indica se o valor datetime especificado <code>dateTime</code> recai num ano bissexto. <ul>        <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a avaliar.</li>      </ul>


## Examples

### Example #1 
Determinar se o ano 2012, conforme representado por &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, é um ano bissexto.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
