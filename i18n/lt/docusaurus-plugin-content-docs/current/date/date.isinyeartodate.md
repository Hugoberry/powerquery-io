---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Rodoma, ar ši data patenka į dabartinius metus, sutampa su dabartine diena, ar yra ankstesnė – naudojama sistemoje nustatyta dabartinė data ir laikas.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Rodoma, ar pateikta datos ir laiko reikšmė `dateTime` patenka į dabartinius metus, sutampa su dabartine diena, ar yra ankstesnė – naudojama sistemoje nustatyta dabartinė data ir laikas.

-   `dateTime`: turi būti įvertinta `date`, `datetime` arba `datetimezone` reikšmė.


## Examples

### Example #1
Nustatykite, ar dabartinis sistemos laikas patenka į metus iki dabartinės datos.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
