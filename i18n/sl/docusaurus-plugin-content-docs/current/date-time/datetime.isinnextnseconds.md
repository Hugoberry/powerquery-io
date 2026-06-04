---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Označuje, ali se ta datetime pojavi v naslednjem številu sekund, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutni sekundi.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Označuje, ali se navedena vrednost za"datetime"`dateTime` pojavi v naslednjem številu sekund, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutni sekundi.

-   `dateTime`: vrednost za `datetime` ali `datetimezone`, ki bo ovrednotena.
-   `seconds`: število sekund.


## Examples

### Example #1
Določite, ali je sekunda po trenutnem sistemskem času v naslednjih dveh sekundah.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
