---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Norāda, vai šī datuma un laika vērtība ir iepriekšējā stundā atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā stundā.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir iepriekšējā stundā atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā stundā.

-   `dateTime`: `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.


## Examples

### Example #1
Nosakiet, vai stunda pirms pašreizējā sistēmas laika ir iepriekšējā stundā.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
