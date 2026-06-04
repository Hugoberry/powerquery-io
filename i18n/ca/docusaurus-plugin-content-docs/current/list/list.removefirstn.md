---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Retorna una llista que omet el nombre especificat d'elements al principi de la llista.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Retorna una llista que suprimeix el primer element de la llista `list`. Si `list` és una llista buida, es retorna una llista buida. Aquesta funció pren un paràmetre opcional, `countOrCondition`, per admetre la supressió de diversos valors, com es mostra a continuació.

-   Si s'especifica un nombre, se suprimirà aquest nombre d'elements.
-   Si s'especifica una condició, se suprimiran tots els elements coincidents consecutius del principi de `list`.
-   Si aquest paràmetre és nul, es respecta el comportament per defecte.


## Examples

### Example #1
Crea una llista a partir de \{1, 2, 3, 4, 5\} sense els 3 primers nombres.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Crea una llista a partir de \{5, 4, 2, 6, 1\} que comença amb un nombre més petit que 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
