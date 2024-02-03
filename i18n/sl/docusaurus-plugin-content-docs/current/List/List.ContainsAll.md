---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Označuje, kje seznam vključuje vse vrednosti na drugem seznamu.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Označuje, ali seznam <code>list</code> vključuje vse vrednosti na drugem seznamu, <code>values</code>.    Vrne "true", če je vrednost najdena na seznamu, sicer vrne "false". Določite lahko izbirno vrednost kriterijev enakosti <code>equationCriteria</code> za nadzor preskušanja enakosti. 


## Examples

### Example #1 
Ugotovite, ali seznam \{1, 2, 3, 4, 5} vsebuje vrednosti 3 in 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Ugotovite, ali seznam \{1, 2, 3, 4, 5} vsebuje vrednosti 5 in 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
