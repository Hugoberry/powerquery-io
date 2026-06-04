---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Norāda, vai šis datums ir nākamajos mēnešos atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā mēnesī.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir nākamajos mēnešos atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā mēnesī.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.
-   `months`: mēnešu skaits.


## Examples

### Example #1
Noteikt, vai šis mēnesis (pēc pašreizējā sistēmas laika) ir nākamajos divos mēnešos.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
