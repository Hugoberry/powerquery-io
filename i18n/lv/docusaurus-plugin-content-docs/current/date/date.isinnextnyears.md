---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Norāda, vai šis datums ir nākamajos gados atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā gadā.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Norāda, vai sniegtā datuma un laika vērtība `dateTime` ir nākamajos gados atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā gadā.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kas ir jānovērtē.
-   `years`: gadu skaits.


## Examples

### Example #1
Noteikt, vai šis gads (pēc pašreizējā sistēmas laika) ir nākamajos divos gados.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
