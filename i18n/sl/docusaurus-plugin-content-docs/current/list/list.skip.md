---
title: List.Skip
---

# List.Skip


Vrne seznam, ki preskoči navedeno število elementov na začetku seznama.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Vrne seznam, ki preskoči prvi element seznama `list`. Če je seznam `list` prazen seznam, je vrnjen prazen seznam. Ta funkcija uporabi izbirni parameter, `countOrCondition`, da omogoči preskok več vrednosti, kot je navedeno spodaj.

-   Če je število določeno, je preskočenih največ toliko elementov.
-   Če je določen pogoj, bodo vsi sledeči ujemajoči se elementi na začetku seznama `list` preskočeni.
-   Če je ta parameter ničeln, se upošteva privzeto vedenje.


## Examples

### Example #1
Ustvarite seznam iz \{1, 2, 3, 4, 5\} brez prvih 3 števil.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Ustvarite seznam iz \{5, 4, 2, 6, 1\}, ki se začne s številom, manjšim od 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
