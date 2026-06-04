---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


Nurodo, ar ši data patenka į ankstesnės savaitės intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią savaitę patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Remarks

Nurodo, ar nurodyta datos ir laiko reikšmė `dateTime` patenka į ankstesnės savaitės intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią savaitę patenkanti reikšmė, funkcija pateiks false.

-   `dateTime`: vertintina `datos`, `datos ir laiko` arba `datos ir laiko juostos` reikšmė.


## Examples

### Example #1
Nustatykite, ar savaitė prieš dabartinį sistemos laiką yra ankstesnė savaitė.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
