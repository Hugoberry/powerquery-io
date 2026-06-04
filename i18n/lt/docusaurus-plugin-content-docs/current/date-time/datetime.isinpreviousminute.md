---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Nurodo, ar šie data ir laikas patenka į ankstesnės minutės intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią minutę patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Nurodo, ar nurodyta datos ir laiko reikšmė `dateTime` patenka į ankstesnės minutės intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią minutę patenkanti reikšmė, funkcija pateiks false.

-   `dateTime`: Vertintina `datos ir laiko` arba `datos ir laiko juostos` reikšmė.


## Examples

### Example #1
Nustato, ar minutė prieš dabartinį sistemos laiką patenka į ankstesnę minutę.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
