---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Norāda, vai šis datums ir pašreizējā dienā, kā to nosaka sistēmas pašreizējais datums un laiks.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datetime vērtība `dateTime` ir pašreizējā dienā, kā to nosaka sistēmas pašreizējais datums un laiks.

-   `dateTime`: novērtējamā `date`, `datetime` vai `datetimezone` vērtība.


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
