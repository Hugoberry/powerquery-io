---
title: List.Contains
---

# List.Contains


## Description

Angiver, om listen indeholder værdien.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Angiver, om listen <code>list</code> indeholder værdien <code>value</code>.    Returnerer true, hvis værdien blev fundet på listen. Ellers returneres false. Du kan angive en valgfri kriterieværdi for ligningen, <code>equationCriteria</code>, for at styre kvalitetstesten. 


## Examples

### Example #1 
Find ud af, om listen \{1, 2, 3, 4, 5} indeholder 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Find ud af, om listen \{1, 2, 3, 4, 5} indeholder 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
