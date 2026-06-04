---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Označuje, ali se ta datetime pojavi v naslednjem številu minut, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutni minuti.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Označuje, ali se navedena vrednost za"datetime"`dateTime` pojavi v naslednjem številu minut, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutni minuti.

-   `dateTime`: vrednost za `datetime` ali `datetimezone`, ki bo ovrednotena.
-   `minutes`: število minut.


## Examples

### Example #1
Določite, ali je minuta po trenutnem sistemskem času v naslednjih dveh minutah.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
