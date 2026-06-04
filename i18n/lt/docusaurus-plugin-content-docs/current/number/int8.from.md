---
title: Int8.From
---

# Int8.From


Iš nurodytos reikšmės sukuriamas 8 bitų sveikasis skaičius su ženklu.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Pateikiama 8 bitų sveikoji `number` reikšmė su ženklu iš nurodytos `value` reikšmės. Jei nurodyta `value` reikšmė yra `null`, `Int8.From` pateikia `null`. Jei nurodyta `value` reikšmė yra `number` 8 bitų sveikųjų skaičių su ženklu diapazone be trupmeninės dalies, pateikiama `value`. Jei yra trupmeninė dalis, skaičius suapvalinamas nurodytu apvalinimo režimu. Numatytasis apvalinimo režimas yra `RoundingMode.ToEven`. Jei `value` reikšmė yra bet kokio kito tipo, ji pirmiausia bus konvertuota į `number` reikšmę naudojant `Number.FromText`. Norėdami sužinoti apie naudojamus apvalinimo režimus žr. `Number.Round`. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“).


## Examples

### Example #1
Gaukite 8 bitų sveikąją `number` reikšmę su ženklu iš `"4"`.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Gaukite 8 bitų sveikąją `number` reikšmę su ženklu iš `"4.5"` naudodami `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
