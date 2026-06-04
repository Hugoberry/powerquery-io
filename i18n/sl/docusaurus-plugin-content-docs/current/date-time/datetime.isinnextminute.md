---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Označuje, ali se ta datetime pojavi v naslednji minuti, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutni minuti.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Označuje, ali se navedena vrednost za"datetime"`dateTime` pojavi v naslednji minuti, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutni minuti.

-   `dateTime`: vrednost za `datetime` ali `datetimezone`, ki bo ovrednotena.


## Examples

### Example #1
Določite, ali je minuta po trenutnem sistemskem času v naslednji minuti.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
