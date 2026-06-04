---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Označuje, ali se ta datetime pojavi v prejšnji sekundi, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutni sekundi.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Označuje, ali se navedena vrednost za"datetime"`dateTime` pojavi v prejšnji sekundi, kot je določeno s trenutnim datumom in uro v sistemu. Rezultat te funkcije je"false", če navedete vrednost, ki se pojavi v trenutni sekundi.

-   `dateTime`: vrednost za `datetime` ali `datetimezone`, ki bo ovrednotena.


## Examples

### Example #1
Določite, ali je sekunda pred trenutnim sistemskim časom v prejšnji sekundi.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
