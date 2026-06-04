---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Nurodo, ar šie data ir laikas patenka į kitos minutės intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią minutę patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Nurodo, ar nurodyta datos ir laiko reikšmė `dateTime` patenka į kitos minutės intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią minutę patenkanti reikšmė, funkcija pateiks false.

-   `dateTime`: Vertintina `datos ir laiko` arba `datos ir laiko juostos` reikšmė.


## Examples

### Example #1
Nurodo, ar minutė po dabartinio sistemos laiko yra tolesnis minutę.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
