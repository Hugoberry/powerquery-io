---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


## Description

Norāda, vai šis datums ir iepriekšējā nedēļā atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā nedēļā.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Details

Norāda, vai sniegtā datuma un laika vērtība <code>dateTime</code> ir iepriekšējā nedēļā atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā nedēļā.      <ul> <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kas ir jānovērtē.      </li>      </ul>


## Examples

### Example #1 
Noteikt, vai iepriekšējā nedēļa pirms pašreizējā sistēmas laika atrodas iepriekšējā nedēļā.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
