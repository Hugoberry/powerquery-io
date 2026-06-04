---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Nurodo, ar ši data patenka į kitų kelių ketvirčių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šį ketvirtį patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Nurodo, ar nurodyta datos ir laiko reikšmė `dateTime` patenka į kitų kelių ketvirčių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šį ketvirtį patenkanti reikšmė, funkcija pateiks false.

-   `dateTime`: vertintina `datos`, `datos ir laiko` arba `datos ir laiko juostos` reikšmė.
-   `quarters`: ketvirčių skaičius.


## Examples

### Example #1
Nustatyti, ar ketvirtis po dabartinio sistemos laiko patenka į du tolesnius ketvirčius.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
