---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Nurodo, ar šie data ir laikas patenka į kitų kelių minučių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią minutę patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Nurodo, ar nurodyta datos ir laiko reikšmė <code>dateTime</code> patenka į kitų kelių minučių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią minutę patenkanti reikšmė, funkcija pateiks false.      <ul>      <li><code>dateTime</code>: vertintina <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>      <li><code>minutes</code>: minučių skaičius.</li>      </ul>


## Examples

### Example #1 
Nustato, ar minutė po dabartinio sistemos laiko patenka į kitas dvi minutes.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime