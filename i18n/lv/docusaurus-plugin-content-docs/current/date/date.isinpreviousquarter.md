---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Norāda, vai šis datums ir iepriekšējā ceturksnī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā ceturksnī.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir iepriekšējā ceturksnī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā ceturksnī.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.


## Examples

### Example #1
Noteikt, vai iepriekšējais ceturksnis pirms pašreizējā sistēmas laika atrodas iepriekšējā ceturksnī.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
