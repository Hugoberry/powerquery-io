---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Norāda, vai šis datums ir pašreizējā ceturksnī, kā to nosaka sistēmas pašreizējais datums un laiks.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Norāda, vai sniegtā datetime vērtība <code>dateTime</code> ir pašreizējā ceturksnī, kā to nosaka sistēmas pašreizējais datums un laiks.      <ul>      <li><code>dateTime</code>: novērtējamā <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība.</li>      </ul>


## Examples

### Example #1 
Nosakiet, vai pašreizējais sistēmas laiks atrodas pašreizējā ceturksnī.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
