---
title: List.Durations
---

# List.Durations


## Description

Generuojamas trukmės reikšmių sąrašas su pradine reikšme, skaičiumi ir papildančiąja trukmės reikšme.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Pateikiamas <code>count</code> <code>duration</code> reikšmių sąrašas, prasidedantis nuo <code>start</code> ir didinamas naudojant pateiktą <code>duration</code> <code>step</code>.


## Examples

### Example #1 
Sukurkite 5 reikšmių sąrašą pradėdami nuo 1 valandos ir didindami po valandą.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
