---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


Nurodo, ar šie data ir laikas patenka į kitos sekundės intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią sekundę patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

Nurodo, ar nurodyta datos ir laiko reikšmė `dateTime` patenka į kitos sekundės intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią sekundę patenkanti reikšmė, funkcija pateiks false.

-   `dateTime`: vertintina `datos ir laiko` arba `datos ir laiko juostos` reikšmė.


## Examples

### Example #1
Nustato, ar sekundė po dabartinio sistemos laiko patenka į kitą sekundę.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
