---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Pokazuje da li ovaj datum pada u prestupnu godinu.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Pokazuje da li data vrednost datuma i vremena <code>dateTime</code> pada u prestupnu godinu. <ul>        <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> koja se procenjuje.</li>      </ul>


## Examples

### Example #1 
Utvrđivanje da li je 2012. godina, koja se predstavlja pomoću &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, prestupna godina.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
