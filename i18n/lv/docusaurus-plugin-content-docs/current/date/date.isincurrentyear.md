---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Norāda, vai šis datums ir pašreizējā gadā, kā to nosaka sistēmas pašreizējais datums un laiks.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datetime vērtība `dateTime` ir pašreizējā gadā, kā to nosaka sistēmas pašreizējais datums un laiks.

-   `dateTime`: novērtējamā `date`, `datetime` vai `datetimezone` vērtība.


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
