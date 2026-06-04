---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Norāda, vai šī datuma un laika vērtība ir iepriekšējās sekundēs atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā sekundē.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir iepriekšējās sekundēs atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā sekundē.

-   `dateTime`: `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.
-   `seconds`: sekunžu skaits.


## Examples

### Example #1
Nosakiet, vai sekunde pirms pašreizējā sistēmas laika ir iepriekšējās divās sekundēs.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
