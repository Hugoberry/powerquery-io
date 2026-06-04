---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Norāda, vai šis datums ir pašreizējā ceturksnī, kā to nosaka sistēmas pašreizējais datums un laiks.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datetime vērtība `dateTime` ir pašreizējā ceturksnī, kā to nosaka sistēmas pašreizējais datums un laiks.

-   `dateTime`: novērtējamā `date`, `datetime` vai `datetimezone` vērtība.


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
