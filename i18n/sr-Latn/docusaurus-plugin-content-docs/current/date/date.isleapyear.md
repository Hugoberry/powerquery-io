---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Pokazuje da li ovaj datum pada u prestupnu godinu.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li data vrednost datuma i vremena `dateTime` pada u prestupnu godinu.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` koja se procenjuje.


## Examples

### Example #1
Utvrđivanje da li je 2012. godina, koja se predstavlja pomoću `#date(2012, 01, 01)`, prestupna godina.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
