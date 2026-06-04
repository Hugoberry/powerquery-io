---
title: List.RemoveLastN
---

# List.RemoveLastN


Vrne seznam, ki odstrani navedeno število elementov na koncu seznama.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Vrne seznam, ki odstrani zadnjih `countOrCondition` elementov na koncu seznama `list`. Če ima seznam `list` manj kot `countOrCondition` elementov, je vrnjen prazen seznam.

-   Če je število določeno, je odstranjenih največ toliko elementov.
-   Če je določen pogoj, bodo vsi sledeči ujemajoči se elementi na koncu seznama `list` odstranjeni.
-   Če je vrednost tega parametra ničelna, bo odstranjen le en element.


## Examples

### Example #1
Ustvari seznam iz \{1, 2, 3, 4, 5\} brez zadnjih 3 števil.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Ustvari seznam iz \{5, 4, 2, 6, 4\}, ki se konča s številom, manjšim od 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
