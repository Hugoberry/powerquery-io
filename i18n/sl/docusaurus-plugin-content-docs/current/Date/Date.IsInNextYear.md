---
title: Date.IsInNextYear
---

# Date.IsInNextYear


## Description

Označuje, ali se ta datum pojavi v naslednjem letu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutnem letu.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v naslednjem letu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutnem letu.      <ul>      <li><code>dateTime</code>: vrednost za <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je leto po trenutnem času sistema v naslednjem letu.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
