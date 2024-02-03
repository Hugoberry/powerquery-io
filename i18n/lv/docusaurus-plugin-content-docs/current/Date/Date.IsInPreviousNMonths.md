---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Norāda, vai šis datums ir iepriekšējos mēnešos atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā mēnesī.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Norāda, vai sniegtā datuma un laika vērtība <code>dateTime</code> ir iepriekšējos mēnešos atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā mēnesī.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kas ir jānovērtē.</li>      <li><code>months</code>: mēnešu skaits.</li>      </ul>


## Examples

### Example #1 
Noteikt, vai iepriekšējais mēnesis (pirms pašreizējā sistēmas laika) ir divos iepriekšējos mēnešos.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
