---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Norāda, vai šī datuma un laika vērtība ir iepriekšējās stundās atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā stundā.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir iepriekšējās stundās atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā stundā.

-   `dateTime`: `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.
-   `hours`: stundu skaits.


## Examples

### Example #1
Nosakiet, vai stunda pirms pašreizējā sistēmas laika ir iepriekšējās divās stundās.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
