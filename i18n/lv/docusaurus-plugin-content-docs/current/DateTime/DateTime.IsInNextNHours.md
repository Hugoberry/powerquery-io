---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Norāda, vai šī datuma un laika vērtība ir nākamajās stundās atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā stundā.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Norāda, vai sniegtā datuma un laika vērtība <code>dateTime</code> ir nākamajās stundās atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā stundā.      <ul>      <li><code>dateTime</code>: <code>datetime</code> vai <code>datetimezone</code> vērtība, kas ir jānovērtē.</li>      <li><code>hours</code>: stundu skaits.</li>      </ul>


## Examples

### Example #1 
Nosakiet, vai stunda pēc pašreizējā sistēmas laika ir nākamās divas stundas.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
