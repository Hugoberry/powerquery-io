---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Norāda, vai šis datums ir pašreizējā gadā un vai tas ir pašreizējā dienā vai pirms tās, kā to nosaka sistēmas pašreizējais datums un laiks.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai sniegtā datetime vērtība `dateTime` ir pašreizējā gadā un vai tā ir pašreizējā dienā vai pirms tās, kā to nosaka sistēmas pašreizējais datums un laiks.

-   `dateTime`: novērtējamā `date`, `datetime` vai `datetimezone` vērtība.


## Examples

### Example #1
Noteikt, vai pašreizējais sistēmas laiks atrodas līdzšinējā gadā.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
