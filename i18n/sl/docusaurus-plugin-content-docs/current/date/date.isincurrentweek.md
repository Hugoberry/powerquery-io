---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Označuje, ali se ta datum pojavi v trenutnem tednu, kot določa trenutni datum in čas v sistemu.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Označuje, ali se podana vrednost"datetime"`dateTime` pojavi v trenutnem tednu, kot določa trenutni datum in čas v sistemu.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, ki bo ovrednotena.


## Examples

### Example #1
Določite, ali je trenutni čas sistema v trenutnem tednu.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
