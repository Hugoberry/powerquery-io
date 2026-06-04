---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Označuje, ali se ta datum pojavi v trenutnem letu in je na trenutni dan ali pred njim, kot določa trenutni datum in čas v sistemu.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Označuje, ali se podana vrednost"datetime"`dateTime` pojavi v trenutnem letu in je na trenutni dan ali pred njim, kot določa trenutni datum in čas v sistemu.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, ki bo ovrednotena.


## Examples

### Example #1
Določite, ali je trenutni čas sistema v letu do danes.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
