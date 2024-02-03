---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


## Description

Norāda, vai šis datums ir nākamajās dienās atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā dienā.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Norāda, vai sniegtā datuma un laika vērtība <code>dateTime</code> ir nākamajās dienās atbilstoši sistēmas pašreizējam datumam un laikam. Ņemiet vērā, ka šī funkcija atgriež vērtību false, ja ir nodota vērtība, kas ir pašreizējā dienā.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kas ir jānovērtē.</li>      <li><code>days</code>: dienu skaits.</li>      </ul>


## Examples

### Example #1 
Noteikt, vai šī diena (pēc pašreizējā sistēmas laika) ir nākamajās divās dienās.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
