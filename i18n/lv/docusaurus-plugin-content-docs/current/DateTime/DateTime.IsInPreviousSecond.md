---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


## Description

Norāda, vai šī datuma un laika vērtība ir iepriekšējā sekundē atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā sekundē.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Details

Norāda, vai sniegtā datuma un laika vērtība <code>dateTime</code> ir iepriekšējā sekundē atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā sekundē.      <ul>      <li><code>dateTime</code>: <code>datetime</code> vai <code>datetimezone</code> vērtība, kas ir jānovērtē.</li>      </ul>


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
