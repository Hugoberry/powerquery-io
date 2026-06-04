---
title: Double.From
---

# Double.From


Iš nurodytos reikšmės sukuriamas dvigubo tikslumo skaičius.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Pateikiama dvigubo tikslumo `number` reikšmė iš nurodytos `value` reikšmės. Jei nurodyta `value` reikšmė yra `null`, `Double.From` pateikia `null`. Jei nurodyta `value` reikšmė yra `number` dvigubo tikslumo skaičių diapazone, pateikiama `value`; kitu atveju pateikiama klaida. Jei `value` reikšmė yra bet kokio kito tipo, ji pirmiausia bus konvertuota į `number` reikšmę naudojant `Number.FromText`. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“).


## Examples

### Example #1
Gaukite dvigubo tikslumo `number` reikšmę iš `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
