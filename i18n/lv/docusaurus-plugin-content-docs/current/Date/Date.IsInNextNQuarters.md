---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Norāda, vai šis datums ir nākamajos ceturkšņos atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā ceturksnī.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Norāda, vai sniegtā datuma un laika vērtība <code>dateTime</code> ir nākamajos ceturkšņos atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā ceturksnī.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kas ir jānovērtē.</li>      <li><code>quarters</code>: ceturkšņu skaits.</li>      </ul>


## Examples

### Example #1 
Noteikt, vai šis ceturksnis (pēc pašreizējā sistēmas laika) ir nākamajos divos ceturkšņos.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
