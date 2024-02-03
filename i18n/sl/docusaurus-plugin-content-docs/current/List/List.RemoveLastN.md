---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Vrne seznam, ki odstrani navedeno število elementov na koncu seznama.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Vrne seznam, ki odstrani zadnjih <code>countOrCondition</code> elementov na koncu seznama <code>list</code>. Če ima <code>list</code> manj kot <code>countOrCondition</code> elementov, se vrne prazen seznam. <ul> <li>Če navedete število, je odstranjenih največ toliko elementov. </li> <li>Če navedete pogoj, se vrnjeni seznam konča s prvim elementom od spodaj na seznamu <code>list</code>, ki ustreza merilom. Ko določen element ne izpolnjuje več pogoja, se nadaljnji elementi ne upoštevajo. </li> <li>Če je ta parameter ničeln, se odstrani samo en element. </li> </ul>


## Examples

### Example #1 
Ustvari seznam iz \{1, 2, 3, 4, 5} brez zadnjih 3 števil.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Ustvari seznam iz \{5, 4, 2, 6, 4}, ki se konča s številom, manjšim od 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
