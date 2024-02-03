---
title: List.Union
---

# List.Union


## Description

Vrne zvezo vrednosti seznama, najdenih v vnosu.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Vzame seznam seznamov <code>lists</code>, združi elemente na posameznih seznamih in jih vrne v izhodnem seznamu. Vrnjeni seznam vsebuje vse elemente na katerem koli vhodnem seznamu.    Ta postopek ohrani tradicionalno semantiko vrste bag, pri čemer se podvojene vrednosti povežejo med izračunom zveze.    Določite lahko izbirno vrednost meril enakosti <code>equationCriteria</code> za nadzor preskušanja enakosti. 


## Examples

### Example #1 
Ustvarite zvezo seznamov \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
