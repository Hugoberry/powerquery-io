---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


## Description

Označuje, ali se ta datum pojavi v prejšnjem mesecu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je &#34;false&#34;, če navedete vrednost, ki se pojavi v trenutnem mesecu.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Details

Označuje, ali se navedena vrednost za "datetime" <code>dateTime</code> pojavi v prejšnjem mesecu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je "false", če navedete vrednost, ki se pojavi v trenutnem mesecu.      <ul>      <li><code>dateTime</code>: vrednost za <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je mesec pred trenutnim časom sistema v predhodnem mesecu.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
