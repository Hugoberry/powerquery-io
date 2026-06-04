---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Norāda, vai šis datums ir nākamajā mēnesī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā mēnesī.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir nākamajā mēnesī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā mēnesī.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.


## Examples

### Example #1
Nosakiet, vai nākamais mēnesis pēc pašreizējā sistēmas laika atrodas nākamajā mēnesī.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
