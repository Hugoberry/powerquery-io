---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Nurodo, ar šie data ir laikas patenka į ankstesnės valandos intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią valandą patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Nurodo, ar nurodyta datos ir laiko reikšmė `dateTime` patenka į ankstesnės valandos intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią valandą patenkanti reikšmė, funkcija pateiks false.

-   `dateTime`: vertintina `datos ir laiko` arba `datos ir laiko juostos` reikšmė.


## Examples

### Example #1
Nustato, ar valanda prieš dabartinį sistemos laiką patenka į ankstesnę valandą.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
