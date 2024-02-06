---
title: List.ContainsAll
---

# List.ContainsAll


Angiver, om en liste indeholder alle værdierne på en anden liste.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Angiver, om listen <code>list</code> indeholder alle værdierne på en anden liste, <code>values</code>.    Returnerer true, hvis værdien blev fundet på listen. Ellers returneres false. Du kan angive en valgfri kriterieværdi for ligningen, <code>equationCriteria</code>, for at styre kvalitetstesten. 


## Examples

### Example #1 
Find ud af, om listen \{1, 2, 3, 4, 5} indeholder 3 og 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Find ud af, om listen \{1, 2, 3, 4, 5} indeholder 5 og 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
