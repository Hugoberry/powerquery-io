---
title: Decimal.From
---

# Decimal.From


Iš nurodytos reikšmės sukuriama dešimtainė trupmena.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Pateikiama dešimtainė `number` reikšmė iš nurodytos `value` reikšmės. Jei nurodyta `value` reikšmė yra `null`, `Decimal.From` pateikia `null`. Jei nurodyta `value` reikšmė yra `number` dešimtainių skaičių diapazone, pateikiama `value`; kitu atveju pateikiama klaida. Jei `value` reikšmė yra bet kokio kito tipo, ji pirmiausia bus konvertuota į `number` reikšmę naudojant `Number.FromText`. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“).


## Examples

### Example #1
Gaukite dešimtainę `number` reikšmę iš `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
