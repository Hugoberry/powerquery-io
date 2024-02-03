---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


## Description

Označuje, ali se ta datum pojavi v naslednjem tednu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutnem tednu.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v naslednjem rednu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutnem tednu.      <ul>      <li><code>dateTime</code>: vrednost za <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je teden po trenutnem času sistema v naslednjem tednu.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
