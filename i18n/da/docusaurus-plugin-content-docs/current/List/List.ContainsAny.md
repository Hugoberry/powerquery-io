---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Angiver, om en liste indeholder en af værdierne på en anden liste.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Angiver, om listen <code>list</code> indeholder en af værdierne på en anden liste, <code>values</code>.        Returnerer true, hvis værdien blev fundet på listen. Ellers returneres false. Du kan angive en valgfri kriterieværdi for ligningen, <code>equationCriteria</code>, for at styre kvalitetstesten. 


## Examples

### Example #1 
Find ud af, om listen \{1, 2, 3, 4, 5} indeholder 3 eller 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Find ud af, om listen \{1, 2, 3, 4, 5} indeholder 6 eller 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
