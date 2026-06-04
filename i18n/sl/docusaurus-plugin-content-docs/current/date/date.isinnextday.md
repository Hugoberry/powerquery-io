---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Označuje, ali se ta datum pojavi v naslednjem dnevu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutnem dnevu.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Označuje, ali se navedena vrednost za"datetime"`dateTime` pojavi v naslednjem dnevu, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutnem dnevu.

-   `dateTime`: vrednost za `date`, `datetime "` ali `datetimezone`, ki bo ovrednotena.


## Examples

### Example #1
Določite, ali je dan po trenutnem času sistema v naslednjem dnevu.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
