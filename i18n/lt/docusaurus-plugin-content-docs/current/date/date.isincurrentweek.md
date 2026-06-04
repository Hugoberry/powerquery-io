---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Rodoma, ar ši data patenka į dabartinę savaitę – naudojama sistemoje nustatyta dabartinė data ir laikas.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Rodoma, ar pateikta datos ir laiko reikšmė `dateTime` patenka į dabartinę savaitę – naudojama sistemoje nustatyta dabartinė data ir laikas.

-   `dateTime`: turi būti įvertinta `date`, `datetime` arba `datetimezone` reikšmė.


## Examples

### Example #1
Nustatykite, ar dabartinis sistemos laikas rodo dabartinę savaitę.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
