---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


## Description

Nurodo, ar šie data ir laikas patenka į ankstesnių kelių sekundžių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią sekundę patenkanti reikšmė, funkcija pateiks false.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Nurodo, ar nurodyta datos ir laiko reikšmė <code>dateTime</code> patenka į ankstesnių kelių sekundžių intervalą, kaip nustatyta pagal dabartinius sistemos datą ir laiką. Atkreipkite dėmesį, kad, jei šiai funkcijai bus perduota į šią sekundę patenkanti reikšmė, funkcija pateiks false.      <ul>      <li><code>dateTime</code>: vertintina <code>datos ir laiko</code> arba <code>datos ir laiko juostos</code> reikšmė.</li>      <li><code>seconds</code>: sekundžių skaičius.</li>      </ul>


## Examples

### Example #1 
Nustato, ar sekundė prieš dabartinį sistemos laiką patenka į dvi ankstesnes sekundes.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime