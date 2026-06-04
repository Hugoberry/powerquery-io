---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Norāda, vai šī datuma un laika vērtība ir nākamajās minūtēs atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā minūtē.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir nākamajās minūtēs atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā minūtē.

-   `dateTime`: `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.
-   `minutes`: minūšu skaits.


## Examples

### Example #1
Nosakiet, vai minūte pēc pašreizējā sistēmas laika ir nākamajās divās minūtēs.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
