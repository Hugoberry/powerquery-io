---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


## Description

Nurodo, ar šie data ir laikas patenka į kitos minutės intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią minutę patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Details

Nurodo, ar nurodyta datos ir laiko reikšmė <code>dateTime</code> patenka į kitos minutės intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią minutę patenkanti reikšmė, funkcija pateiks false.      <ul>      <li><code>dateTime</code>: Vertintina <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>      </ul>


## Examples

### Example #1 
Nurodo, ar minutė po dabartinio sistemos laiko yra tolesnis minutę.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
