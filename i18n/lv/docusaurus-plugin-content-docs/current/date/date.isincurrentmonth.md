---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Norāda, vai šis datums ir pašreizējā mēnesī, kā to nosaka sistēmas pašreizējais datums un laiks.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datetime vērtība `dateTime` ir pašreizējā mēnesī, kā to nosaka sistēmas pašreizējais datums un laiks.

-   `dateTime`: novērtējamā `date`, `datetime` vai `datetimezone` vērtība.


## Examples

### Example #1
Noteikt, vai pašreizējais sistēmas laiks atrodas pašreizējā mēnesī.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
