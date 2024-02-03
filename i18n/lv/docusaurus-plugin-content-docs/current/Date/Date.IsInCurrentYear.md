---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Norāda, vai šis datums ir pašreizējā gadā, kā to nosaka sistēmas pašreizējais datums un laiks.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Norāda, vai sniegtā datetime vērtība <code>dateTime</code> ir pašreizējā gadā, kā to nosaka sistēmas pašreizējais datums un laiks.      <ul>      <li><code>dateTime</code>: novērtējamā <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība.</li>      </ul>


## Examples

### Example #1 
Noteikt, vai pašreizējais sistēmas laiks atrodas pašreizējā gadā.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
