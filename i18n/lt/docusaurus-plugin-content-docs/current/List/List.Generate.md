---
title: List.Generate
---

# List.Generate


## Description

Sugeneruoja reikšmių sąrašą.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Naudojant pateiktas funkcijas generuojamas reikšmių sąrašas. Funkcija <code>initial</code> sugeneruoja pradinę potencialią reikšmę, kuri yra tikrinama pagal <code>condition</code>.    Jei potenciali reikšmė patvirtinama, ji pateikiama kaip gauto sąrašo dalis, o kita potenciali reikšmė sugeneruojama naujai patvirtintą reikšmę perduodant į <code>next</code>.    Kai potenciali reikšmė neatitinka <code>condition</code>, sąrašo generavimo procesas sustoja.    Taip pat gali būti pateiktas pasirenkamas parametras, <code>selector</code>, kad būtų transformuoti elementai gautame sąraše.


## Examples

### Example #1 
Sukurkite sąrašą pradėdami nuo dešimtos vietos ir pakartotinai mažinkite po vieną užtikrindami, jog kiekvienas elementas būtų didesnis už nulį.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Sugeneruokite įrašų, kuriuose yra x ir y, sąrašą (x yra reikšmė, o y yra sąrašas). x turėtų būti mažiau nei 10 ir žymėti sąraše y esančių elementų skaičių. Sugeneravus sąrašą, pateikite tik x reikšmes.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
