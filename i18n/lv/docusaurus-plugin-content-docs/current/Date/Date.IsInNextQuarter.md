---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


## Description

Norāda, vai šis datums ir nākamajā ceturksnī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā ceturksnī.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Details

Norāda, vai sniegtā datuma un laika vērtība <code>dateTime</code> ir nākamajā ceturksnī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā ceturksnī.      <ul> <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kas ir jānovērtē.      </li>      </ul>


## Examples

### Example #1 
Nosakiet, vai nākamais ceturksnis pēc pašreizējā sistēmas laika atrodas nākamajā ceturksnī.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
