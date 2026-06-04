---
title: Int64.From
---

# Int64.From


Iš pateiktos vertės sukuriama 64 bitų sveikoji vertė.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Pateikiama 64 bitų sveikoji `number` reikšmė iš nurodytos reikšmės `value`. Jei nurodyta `value` reikšmė yra `null`, `Int64.From` pateikia `null`. Jei nurodyta `value` reikšmė yra `number` 64 bitų sveikųjų skaičių diapazone be trupmeninės dalies, pateikiama `value`. Jei yra trupmeninė dalis, skaičius suapvalinamas nurodytu apvalinimo režimu. Numatytasis apvalinimo režimas yra `RoundingMode.ToEven`. Jei `value` reikšmė yra bet kokio kito tipo, ji pirmiausia bus konvertuota į `number` reikšmę naudojant `Number.FromText`. Norėdami sužinoti apie naudojamus apvalinimo režimus žr. `Number.Round`. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“).


## Examples

### Example #1
Gaukite `"4"` 64 bitų sveikąją `number` vertę.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Gaukite 64 bitų sveikąją `number` reikšmę iš `"4.5"` naudodami `RoundingMode.AwayFromZero`.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
