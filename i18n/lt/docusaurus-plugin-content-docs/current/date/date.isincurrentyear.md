---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Rodoma, ar ši data patenka į dabartinius metus – naudojama sistemoje nustatyta dabartinė data ir laikas.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Rodoma, ar pateikta datos ir laiko reikšmė `dateTime` patenka į dabartinius metus – naudojama sistemoje nustatyta dabartinė data ir laikas.

-   `dateTime`: turi būti įvertinta `date`, `datetime` arba `datetimezone` reikšmė.


## Examples

### Example #1
Nustatykite, ar dabartinis sistemos laikas rodo dabartinius metus.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
