---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Označuje, ali se ta datum pojavi v trenutnem mesecu, kot določa trenutni datum in čas v sistemu.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Označuje, ali se podana vrednost"datetime"`dateTime` pojavi v trenutnem mesecu, kot določa trenutni datum in čas v sistemu.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, ki bo ovrednotena.


## Examples

### Example #1
Določite, ali je trenutni čas sistema v trenutnem mesecu.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
