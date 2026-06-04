---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Norāda, vai šis datums iekrīt garajā gadā.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Norāda, vai norādītā datetime vērtība `dateTime` iekrīt garajā gadā.

-   `dateTime`: novērtējamā `date`, `datetime` vai `datetimezone` vērtība.


## Examples

### Example #1
Nosakiet, vai 2012. gads, kā to norāda `#date(2012, 01, 01)`, ir garais gads.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
