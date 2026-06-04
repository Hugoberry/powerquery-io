---
title: List.Difference
---

# List.Difference


Retorna la diferència de les dues llistes proporcionades.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retorna els elements de la llista `list1` que no apareixen a la llista `list2`. S'admeten els valors duplicats. Un valor de criteris d'equació opcional, `equationCriteria`, es pot especificar per controlar la prova d'igualtat.


## Examples

### Example #1
Troba els elements de la llista \{1, 2, 3, 4, 5\} que no apareixen a \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Troba els elements de la llista \{1, 2\} que no apareixen a \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
