---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Norāda, vai šis datums ir pašreizējā nedēļā, kā to nosaka sistēmas pašreizējais datums un laiks.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Norāda, vai sniegtā datetime vērtība <code>dateTime</code> ir pašreizējā nedēļā, kā to nosaka sistēmas pašreizējais datums un laiks.      <ul>      <li><code>dateTime</code>: novērtējamā <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība.</li>      </ul>


## Examples

### Example #1 
Noteikt, vai pašreizējais sistēmas laiks atrodas pašreizējā nedēļā.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
