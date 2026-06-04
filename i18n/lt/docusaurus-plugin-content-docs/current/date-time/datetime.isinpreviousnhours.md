---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Nurodo, ar šie data ir laikas patenka į ankstesnių kelių valandų intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią valandą patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Nurodo, ar nurodyta datos ir laiko reikšmė `dateTime` patenka į ankstesnių kelių valandų intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią valandą patenkanti reikšmė, funkcija pateiks false.

-   `dateTime`: vertintina `datos ir laiko` arba `datos ir laiko juostos` reikšmė.
-   `hours`: valandų skaičius.


## Examples

### Example #1
Nustato, ar valanda prieš dabartinį sistemos laiką patenka į dvi ankstesnes valandas.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
