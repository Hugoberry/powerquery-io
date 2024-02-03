---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Norāda, vai šis datums ir pašreizējā dienā, kā to nosaka sistēmas pašreizējais datums un laiks.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Norāda, vai sniegtā datetime vērtība <code>dateTime</code> ir pašreizējā dienā, kā to nosaka sistēmas pašreizējais datums un laiks.      <ul>      <li><code>dateTime</code>: novērtējamā <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība.</li>      </ul>


## Examples

### Example #1 
Noteikt, vai pašreizējais sistēmas laiks atrodas pašreizējā dienā.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
