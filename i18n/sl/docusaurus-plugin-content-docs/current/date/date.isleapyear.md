---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Pokaže, ali je datum v prestopnem letu.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Pokaže, ali je podana vrednost"datetime"`dateTime` v prestopnem letu.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, ki bo ovrednotena.


## Examples

### Example #1
Določite, ali je leto 2012, kot ga predstavlja `#date(2012, 01, 01)`, prestopno leto.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
