---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Norāda, vai šis datums ir pašreizējā nedēļā, kā to nosaka sistēmas pašreizējais datums un laiks.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datetime vērtība `dateTime` ir pašreizējā nedēļā, kā to nosaka sistēmas pašreizējais datums un laiks.

-   `dateTime`: novērtējamā `date`, `datetime` vai `datetimezone` vērtība.


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
