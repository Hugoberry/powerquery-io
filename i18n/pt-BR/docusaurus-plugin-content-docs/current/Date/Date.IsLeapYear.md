---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Indica se esta data cairá em um ano bissexto.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Indica se o valor datetime <code>dateTime</code> especificado cairá em um ano bissexto. <ul>        <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determina se o ano 2012, conforme representado por &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, é um ano bissexto.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
