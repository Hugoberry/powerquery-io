---
title: Single.From
---

# Single.From


Iš nurodytos reikšmės sukuriamas paprastojo tikslumo skaičius.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Pateikiama viengubo tikslumo `number` reikšmė iš nurodytos `value` reikšmės. Jei nurodyta `value` reikšmė yra `null`, `Single.From` pateikia `null`. Jei nurodyta `value` reikšmė yra `number` viengubo tikslumo skaičių diapazone, pateikiama `value`; kitu atveju pateikiama klaida. Jei `value` reikšmė yra bet kokio kito tipo, ji pirmiausia bus konvertuota į `number` reikšmę naudojant `Number.FromText`. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“).


## Examples

### Example #1
Gaukite paprastojo tikslumo `number` reikšmę iš `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
