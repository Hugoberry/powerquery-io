---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Rodoma, ar ši data patenka į dabartinį ketvirtį – naudojama sistemoje nustatyta dabartinė data ir laikas.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Rodoma, ar pateikta datos ir laiko reikšmė `dateTime` patenka į dabartinį ketvirtį – naudojama sistemoje nustatyta dabartinė data ir laikas.

-   `dateTime`: turi būti įvertinta `date`, `datetime` arba `datetimezone` reikšmė.


## Examples

### Example #1
Nustatykite, ar dabartinis sistemos laikas rodo dabartinį ketvirtį.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
