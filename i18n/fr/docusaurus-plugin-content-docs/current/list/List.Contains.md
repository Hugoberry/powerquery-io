---
title: List.Contains
---

# List.Contains


Indique si la liste contient la valeur.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Indique si la liste contient <code>list</code> la valeur <code>value</code>.    Retourne true si la valeur est trouvée dans la liste ; sinon false. La valeur du critère d'équation facultatif, <code>equationCriteria</code>, peut être spécifiée pour contrôler le test d'égalité. 


## Examples

### Example #1 
Détermine si la liste \{1, 2, 3, 4, 5} contient 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Détermine si la liste \{1, 2, 3, 4, 5} contient 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
