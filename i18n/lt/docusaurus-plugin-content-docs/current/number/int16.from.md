---
title: Int16.From
---

# Int16.From


Iš nurodytos reikšmės sukuriamas 16 bitų sveikasis skaičius.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Pateikiama 16 bitų sveikoji `number` reikšmė iš nurodytos `value` reikšmės. Jei nurodyta `value` reikšmė yra `null`, `Int16.From` pateikia `null`. Jei nurodyta `value` reikšmė yra `number` 16 bitų sveikųjų skaičių diapazone be trupmeninės dalies, pateikiama `value`. Jei yra trupmeninė dalis, skaičius suapvalinamas nurodytu apvalinimo režimu. Numatytasis apvalinimo režimas yra `RoundingMode.ToEven`. Jei `value` reikšmė yra bet kokio kito tipo, ji pirmiausia bus konvertuota į `number` reikšmę naudojant `Number.FromText`. Norėdami sužinoti apie naudojamus apvalinimo režimus žr. `Number.Round`. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“).


## Examples

### Example #1
Gaukite 16 bitų sveikąją `number` reikšmę iš `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Gaukite 16 bitų sveikąją `number` reikšmę iš `"4.5"` naudodami `RoundingMode.AwayFromZero`.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
