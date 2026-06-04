---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Označuje, ali se ta datetime pojavi v prejšnjem številu ur, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutni uri.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Označuje, ali se navedena vrednost za"datetime"`dateTime` pojavi v prejšnjem številu ur, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutni uri.

-   `dateTime`: vrednost za `date` ali `datetimezone`, ki bo ovrednotena.
-   `hours`: število ur.


## Examples

### Example #1
Določite, ali je ura pred trenutnim sistemskim časom v prejšnjih dveh urah.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
