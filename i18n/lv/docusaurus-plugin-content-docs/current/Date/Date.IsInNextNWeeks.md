---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


## Description

Norāda, vai šis datums ir nākamajās nedēļās atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā nedēļā.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Norāda, vai sniegtā datuma un laika vērtība <code>dateTime</code> ir nākamajās nedēļās atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā nedēļā.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kas ir jānovērtē.</li>      <li><code>weeks</code>: nedēļu skaits.</li>      </ul>


## Examples

### Example #1 
Noteikt, vai šī nedēļa (pēc pašreizējā sistēmas laika) ir nākamajās divās nedēļās.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
