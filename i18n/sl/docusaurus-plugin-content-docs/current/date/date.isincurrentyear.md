---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Označuje, ali se ta datum pojavi v trenutnem letu, kot določa trenutni datum in čas v sistemu.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Označuje, ali se podana vrednost"datetime"`dateTime` pojavi v trenutnem letu, kot določa trenutni datum in čas v sistemu.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, ki bo ovrednotena.


## Examples

### Example #1
Določite, ali je trenutni čas sistema v trenutnem letu.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
