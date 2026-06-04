---
title: Currency.From
---

# Currency.From


Pateikia valiutos reikšmę nuo duotos reikšmės.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Pateikiama `currency` reikšmė iš nurodytos `value` reikšmės. Jei nurodyta `value` reikšmė yra `null`, `Currency.From` pateikia `null`. Jei nurodyta `value` reikšmė yra `number`, valiutos diapazone, pateikiama `value`, kurios trupmeninė dalis suapvalinama iki 4 skaitmenų po kablelio. Jei `value` reikšmė yra bet kokio kito tipo, ji pirmiausia bus konvertuota į `number` reikšmę naudojant `Number.FromText`. Tinkamas valiutos diapazonas yra nuo `-922,337,203,685,477.5808` iki `922,337,203,685,477.5807`. Galimus apvalinimo režimus žr. `Number.Round`. Numatytasis yra `RoundingMode.ToEven`. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“).


## Examples

### Example #1
Gaukite `"1,23455"` reikšmę `currency`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Gaukite `currency` reikšmę pagal `"1.23455"` naudodami `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
