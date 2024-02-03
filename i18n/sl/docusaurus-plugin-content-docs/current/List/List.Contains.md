---
title: List.Contains
---

# List.Contains


## Description

Označuje, ali seznam vsebuje vrednost.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Označuje, ali seznam <code>list</code> vsebuje vrednost <code>value</code>.    Vrne "true", če je vrednost najdena na seznamu, sicer vrne "false". Določite lahko izbirno vrednost kriterijev enakosti <code>equationCriteria</code> za nadzor preskušanja enakosti. 


## Examples

### Example #1 
Ugotovite, ali seznam \{1, 2, 3, 4, 5} vsebuje vrednost 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Ugotovite, ali seznam \{1, 2, 3, 4, 5} vsebuje vrednost 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
