---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

Norāda, vai šis datums ir iepriekšējā ceturksnī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā ceturksnī.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

Norāda, vai sniegtā datuma un laika vērtība <code>dateTime</code> ir iepriekšējā ceturksnī atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā ceturksnī.      <ul> <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kas ir jānovērtē.      </li>      </ul>


## Examples

### Example #1 
Noteikt, vai iepriekšējais ceturksnis pirms pašreizējā sistēmas laika atrodas iepriekšējā ceturksnī.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
