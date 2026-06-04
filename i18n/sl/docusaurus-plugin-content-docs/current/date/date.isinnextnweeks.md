---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


Označuje, ali se ta datum pojavi v naslednjem številu tednov, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutnem tednu.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Označuje, ali se navedena vrednost za"datetime"`dateTime` pojavi v naslednjem številu tednov, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutnem tednu.

-   `dateTime`: vrednost za `date`, `datetime` ali `datetimezone`, ki bo ovrednotena.
-   `weeks`: število tednov.


## Examples

### Example #1
Določite, ali je teden po trenutnem času sistema v naslednjih dveh tednih.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
