---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


Označuje, ali se ta datum pojavi v prejšnjem mesecu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutnem mesecu.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

Označuje, ali se navedena vrednost za"datetime"`dateTime` pojavi v prejšnjem mesecu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutnem mesecu.

-   `dateTime`: vrednost za `date`, `datetime` ali `datetimezone`, ki bo ovrednotena.


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
