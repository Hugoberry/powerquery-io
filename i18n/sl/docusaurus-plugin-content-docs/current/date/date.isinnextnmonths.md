---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Označuje, ali se ta datum pojavi v naslednjem številu mesecev, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutnem mesecu.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Označuje, ali se navedena vrednost za"datetime"`dateTime` pojavi v naslednjem številu mesecev, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutnem mesecu.

-   `dateTime`: vrednost za `date`, `datetime` ali `datetimezone`, ki bo ovrednotena.
-   `months`: število mesecev.


## Examples

### Example #1
Določite, ali je mesec po trenutnem času sistema v naslednjih dveh mesecih.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
