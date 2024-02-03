---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Označuje, kje seznam vključuje katero koli vrednost na drugem seznamu.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Označuje, ali seznam <code>list</code> vključuje katero koli vrednost na drugem seznamu, <code>values</code>.        Vrne "true", če je vrednost najdena na seznamu, sicer vrne "false". Določite lahko izbirno vrednost kriterijev enakosti <code>equationCriteria</code> za nadzor preskušanja enakosti. 


## Examples

### Example #1 
Ugotovite, ali seznam \{1, 2, 3, 4, 5} vsebuje vrednost 3 ali 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Ugotovite, ali seznam \{1, 2, 3, 4, 5} vsebuje vrednost 6 ali 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
