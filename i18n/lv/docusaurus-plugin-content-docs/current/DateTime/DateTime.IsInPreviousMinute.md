---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


## Description

Norāda, vai šī datuma un laika vērtība ir iepriekšējā minūtē atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā minūtē.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Details

Norāda, vai sniegtā datuma un laika vērtība <code>dateTime</code> ir iepriekšējā minūtē atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā minūtē.      <ul>      <li><code>dateTime</code>: <code>datetime</code> vai <code>datetimezone</code> vērtība, kas ir jānovērtē.</li>      </ul>


## Examples

### Example #1 
Nosakiet, vai minūte pirms pašreizējā sistēmas laika ir iepriekšējā minūtē.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
