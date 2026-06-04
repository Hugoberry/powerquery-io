---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Označuje, ali se ta datum pojavi v prejšnjem številu četrtletij, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutnem četrtletju.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Označuje, ali se navedena vrednost za"datetime"`dateTime` pojavi v prejšnjem številu četrtletij, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutnem četrtletju.

-   `dateTime`: vrednost za `date`, `datetime` ali `datetimezone`, ki bo ovrednotena.
-   `quarters`: število četrtletij.


## Examples

### Example #1
Določite, ali je četrtletje pred trenutnim časom sistema v preteklih dveh četrtletjih.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
