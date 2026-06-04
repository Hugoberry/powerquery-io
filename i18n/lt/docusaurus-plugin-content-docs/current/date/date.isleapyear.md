---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Rodoma, ar ši data patenka į keliamuosius metus.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Rodoma, ar pateikta datos ir laiko reikšmė `dateTime` patenka į keliamuosius metus.

-   `dateTime`: turi būti įvertinta `date`, `datetime` arba `datetimezone` reikšmė.


## Examples

### Example #1
Nustatykite, ar 2012 metai, nurodyti `#date(2012, 01, 01)`, yra keliamieji metai.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
