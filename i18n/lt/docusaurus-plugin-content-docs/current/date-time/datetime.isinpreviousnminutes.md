---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


Nurodo, ar šie data ir laikas patenka į ankstesnių kelių minučių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią minutę patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Nurodo, ar nurodyta datos ir laiko reikšmė `dateTime` patenka į ankstesnių kelių minučių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią minutę patenkanti reikšmė, funkcija pateiks false.

-   `dateTime`: vertintina `datos ir laiko` arba `datos ir laiko juostos` reikšmė.
-   `minutes`: minučių skaičius.


## Examples

### Example #1
Nustato, ar minutė prieš dabartinį sistemos laiką patenka į dvi ankstesnes minutes.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
