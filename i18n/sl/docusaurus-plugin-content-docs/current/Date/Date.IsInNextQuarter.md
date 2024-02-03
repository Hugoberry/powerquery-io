---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


## Description

Označuje, ali se ta datum pojavi v naslednjem četrtletju, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutnem četrtletju.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v naslednjem četrtletju, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutnem četrtletju.      <ul>      <li><code>dateTime</code>: vrednost za <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je četrtletje po trenutnem času sistema v naslednjem četrtletju.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
