---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Norāda, vai šis datums ir nākamajās dienās atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā dienā.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir nākamajās dienās atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā dienā.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.
-   `days`: dienu skaits.


## Examples

### Example #1
Noteikt, vai šī diena (pēc pašreizējā sistēmas laika) ir nākamajās divās dienās.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
