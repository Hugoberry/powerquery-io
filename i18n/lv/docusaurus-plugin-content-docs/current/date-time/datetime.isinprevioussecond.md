---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Norāda, vai šī datuma un laika vērtība ir iepriekšējā sekundē atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā sekundē.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir iepriekšējā sekundē atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā sekundē.

-   `dateTime`: `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.


## Examples

### Example #1
Nosakiet, vai sekunde pirms pašreizējā sistēmas laika ir iepriekšējā sekundē.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
