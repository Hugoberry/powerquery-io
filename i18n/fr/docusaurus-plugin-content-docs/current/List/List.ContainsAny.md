---
title: List.ContainsAny
---

# List.ContainsAny


Indique si une liste inclut l&#39;une des valeurs d&#39;une autre liste.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indique si la liste <code>list</code> inclut l'une des valeurs d'une autre liste, <code>values</code>.        Retourne true si la valeur est trouvée dans la liste ; sinon false. La valeur du critère d'équation facultatif, <code>equationCriteria</code>, peut être spécifiée pour contrôler le test d'égalité. 


## Examples

### Example #1 
Détermine si la liste \{1, 2, 3, 4, 5} contient 3 ou 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Détermine si la liste \{1, 2, 3, 4, 5} contient 6 ou 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
