---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


## Description

Označuje, ali se ta datum pojavi v prejšnjem tednu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutnem tednu.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v prejšnjem tednu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutnem tednu.      <ul>      <li><code>dateTime</code>: vrednost za <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je teden pred trenutnim časom sistema v predhodnem tednu.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
