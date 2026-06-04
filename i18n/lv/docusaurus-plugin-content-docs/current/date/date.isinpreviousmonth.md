---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


Norāda, vai šis datums ir iepriekšējā mēnesī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā mēnesī.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir iepriekšējā mēnesī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā mēnesī.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.


## Examples

### Example #1
Noteikt, vai iepriekšējais mēnesis pirms pašreizējā sistēmas laika atrodas iepriekšējā mēnesī.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
