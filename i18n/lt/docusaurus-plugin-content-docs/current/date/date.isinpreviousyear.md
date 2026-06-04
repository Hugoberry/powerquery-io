---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Nurodo, ar ši data patenka į ankstesnių metų intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šiuos metus patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Nurodo, ar nurodyta datos ir laiko reikšmė `dateTime` patenka į ankstesnių metų intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šiuos metus patenkanti reikšmė, funkcija pateiks false.

-   `dateTime`: vertintina `datos`, `datos ir laiko` arba `datos ir laiko juostos` reikšmė.


## Examples

### Example #1
Nustatykite, ar metai prieš dabartinį sistemos laiką yra ankstesni metai.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
