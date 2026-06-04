---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


Norāda, vai šis datums ir nākamajā ceturksnī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā ceturksnī.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir nākamajā ceturksnī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā ceturksnī.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.


## Examples

### Example #1
Nosakiet, vai nākamais ceturksnis pēc pašreizējā sistēmas laika atrodas nākamajā ceturksnī.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
