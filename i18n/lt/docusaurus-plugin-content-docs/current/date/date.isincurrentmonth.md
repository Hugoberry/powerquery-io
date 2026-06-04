---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Rodoma, ar ši data patenka į dabartinį mėnesį – naudojama sistemoje nustatyta dabartinė data ir laikas.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Rodoma, ar pateikta datos ir laiko reikšmė `dateTime` patenka į dabartinį mėnesį – naudojama sistemoje nustatyta dabartinė data ir laikas.

-   `dateTime`: turi būti įvertinta `date`, `datetime` arba `datetimezone` reikšmė.


## Examples

### Example #1
Nustatykite, ar dabartinis sistemos laikas rodo dabartinį mėnesį.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
