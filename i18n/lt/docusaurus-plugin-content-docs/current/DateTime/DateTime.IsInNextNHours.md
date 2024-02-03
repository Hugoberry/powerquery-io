---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Nurodo, ar šie data ir laikas patenka į kitų kelių valandų intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią valandą patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Nurodo, ar nurodyta datos ir laiko reikšmė <code>dateTime</code> patenka į kitų kelių valandų intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią valandą patenkanti reikšmė, funkcija pateiks false.      <ul>      <li><code>dateTime</code>: vertintina <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>      <li><code>hours</code>: valandų skaičius.</li>      </ul>


## Examples

### Example #1 
Nustato, ar valanda po dabartinio sistemos laiko patenka į kitas dvi valandas.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime