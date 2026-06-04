---
title: List.RemoveLastN
---

# List.RemoveLastN


Retorna una llista que suprimeix el nombre especificat d'elements del final de la llista.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Retorna una llista que suprimeix els últims `countOrCondition` elements del final de la llista `list`. Si `list` té menys de `countOrCondition` elements, es retorna una llista buida.

-   Si s'especifica un nombre, se suprimirà aquest nombre d'elements.
-   Si s'especifica una condició, se suprimiran tots els elements coincidents consecutius del final de `list`.
-   Si aquest paràmetre és nul, només se suprimeix un element.


## Examples

### Example #1
Crea una llista a partir de \{1, 2, 3, 4, 5\} sense els últims 3 nombres.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Crea una llista a partir de \{5, 4, 2, 6, 4\} que acaba amb un nombre més petit que 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
