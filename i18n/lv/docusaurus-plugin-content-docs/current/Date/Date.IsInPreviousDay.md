---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


## Description

Norāda, vai šis datums ir iepriekšējā dienā atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā dienā.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Details

Norāda, vai sniegtā datuma un laika vērtība <code>dateTime</code> ir iepriekšējā dienā atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā dienā.      <ul> <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kas ir jānovērtē.      </li>      </ul>


## Examples

### Example #1 
Noteikt, vai iepriekšējā diena pirms pašreizējā sistēmas laika atrodas iepriekšējā dienā.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
