---
title: List.Skip
---

# List.Skip


## Description

Vrne seznam, ki preskoči navedeno število elementov na začetku seznama.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Vrne seznam, ki preskoči prvi element seznama <code>list</code>. Če je <code>list</code> prazen seznam, je vrnjen prazen seznam.Ta funkcija vzame izbirni parameter <code>countOrCondition</code> za podporo preskakovanja več vrednosti, kot je navedeno spodaj. <ul> <li>Če navedete število, je preskočenih največ toliko elementov. </li> <li>Če navedete pogoj, se vrnjeni seznam začne s prvim elementom na seznamu <code>list</code>, ki ustreza kriterijem. Ko določen element ne izpolnjuje več pogoja, se nadaljnji elementi ne upoštevajo. </li> <li>Če je ta parameter ničeln, se upošteva privzeti način delovanja. </li> </ul>


## Examples

### Example #1 
Ustvarite seznam iz \{1, 2, 3, 4, 5} brez prvih 3 števil.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Ustvarite seznam iz \{5, 4, 2, 6, 1}, ki se začne s številom, manjšim od 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
