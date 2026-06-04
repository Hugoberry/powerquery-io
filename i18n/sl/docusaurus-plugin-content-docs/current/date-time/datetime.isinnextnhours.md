---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Označuje, ali se ta datetime pojavi v naslednjem številu ur, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutni uri.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Označuje, ali se navedena vrednost za"datetime"`dateTime` pojavi v naslednjem številu ur, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutni uri.

-   `dateTime`: vrednost za `datetime` ali `datetimezone`, ki bo ovrednotena.
-   `hours`: število ur.


## Examples

### Example #1
Določite, ali je ura po trenutnem sistemskem času v naslednjih dveh urah.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
