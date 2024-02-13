---
title: List.ContainsAll
---

# List.ContainsAll


Indique si une liste inclut toutes les valeurs d&#39;une autre liste.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indique si la liste <code>list</code> inclut toutes les valeurs d'une autre liste, <code>values</code>.    Retourne true si la valeur est trouvée dans la liste ; sinon false. La valeur du critère d'équation facultatif, <code>equationCriteria</code>, peut être spécifiée pour contrôler le test d'égalité. 


## Examples

### Example #1 
Détermine si la liste \{1, 2, 3, 4, 5} contient 3 et 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Détermine si la liste \{1, 2, 3, 4, 5} contient 5 et 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
