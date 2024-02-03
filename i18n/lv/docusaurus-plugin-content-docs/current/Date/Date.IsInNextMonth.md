---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


## Description

Norāda, vai šis datums ir nākamajā mēnesī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā mēnesī.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Details

Norāda, vai sniegtā datuma un laika vērtība <code>dateTime</code> ir nākamajā mēnesī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā mēnesī.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kas ir jānovērtē.</li>      </ul>


## Examples

### Example #1 
Nosakiet, vai nākamais mēnesis pēc pašreizējā sistēmas laika atrodas nākamajā mēnesī.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
