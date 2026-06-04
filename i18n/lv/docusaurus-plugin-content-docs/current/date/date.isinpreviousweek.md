---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


Norāda, vai šis datums ir iepriekšējā nedēļā atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā nedēļā.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir iepriekšējā nedēļā atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā nedēļā.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.


## Examples

### Example #1
Noteikt, vai iepriekšējā nedēļa pirms pašreizējā sistēmas laika atrodas iepriekšējā nedēļā.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
