---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Pokaže, ali je datum v prestopnem letu.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Pokaže, ali je podana vrednost "datetime" <code>dateTime</code> v prestopnem letu. <ul>        <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je leto 2012, kot ga predstavlja &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, prestopno leto.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
