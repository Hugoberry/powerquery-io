---
title: List.Modes
---

# List.Modes


Pateikiamas dažniausių sąrašo reikšmių sąrašas.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Pateikia elementus, kurie dažniausiai rodomi `list`. Jei sąrašas tuščias, pateikiama klaida. Jei keli elementai rodomi tuo pačiu maksimaliu dažnumu, pateikiami visi elementai. Norint valdyti lygybės bandymą, galima nurodyti pasirinktinę palyginimo kriterijų reikšmę `equationCriteria`.


## Examples

### Example #1
Raskite elementus, kurie sąraše rodomi dažniausiai, `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
