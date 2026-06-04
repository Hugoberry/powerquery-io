---
title: List.Mode
---

# List.Mode


Pateikiama dažniausia sąrašo reikšmė.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Pateikiamas elementas, kuris dažniausiai rodomas `list`. Jei sąrašas tuščias, pateikiama klaida. Jei keli elementai rodomi tuo pačiu maksimaliu dažnumu, pasirenkamas paskutinis. Norint valdyti lygybės bandymą, galima nurodyti pasirinktinę palyginimo kriterijų reikšmę `equationCriteria`.


## Examples

### Example #1
Raskite elementą, kuris sąraše rodomas dažniausiai, `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Raskite elementą, kuris sąraše pasirodo dažniausiai, `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
