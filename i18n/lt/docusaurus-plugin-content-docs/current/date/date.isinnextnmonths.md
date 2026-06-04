---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Nurodo, ar ši data patenka į kitų kelių mėnesių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šį mėnesį patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Nurodo, ar nurodyta datos ir laiko reikšmė `dateTime` patenka į kitų kelių mėnesių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šį mėnesį patenkanti reikšmė, funkcija pateiks false.

-   `dateTime`: vertintina `datos`, `datos ir laiko` arba `datos ir laiko juostos` reikšmė.
-   `months`: mėnesių skaičius.


## Examples

### Example #1
Nustatyti, ar mėnuo po dabartinio sistemos laiko patenka į tolesnius du mėnesius.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
