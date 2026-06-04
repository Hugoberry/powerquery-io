---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Označuje, ali se ta datum pojavi v trenutnem dnevu, kot določa trenutni datum in čas v sistemu.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Označuje, ali se podana vrednost"datetime"`dateTime` pojavi v trenutnem dnevu, kot določa trenutni datum in čas v sistemu.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, ki bo ovrednotena.


## Examples

### Example #1
Določite, ali je trenutni čas sistema v trenutnem dnevu.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
