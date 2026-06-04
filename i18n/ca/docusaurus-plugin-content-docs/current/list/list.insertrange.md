---
title: List.InsertRange
---

# List.InsertRange


Insereix els valors en una llista a l'índex donat.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Retorna una llista nova produïda amb la inserció de valors a `values` a `list` a `index`. La primera posició de la llista és a l'índex 0.

-   `list`: la llista de destinació en què s'han d'inserir els valors.
-   `index`: l'índex de la llista de destinació (`list`) en què s'insereixen els valors. La primera posició de la llista és a l'índex 0.
-   `values`: la llista de valors que s'han d'inserir a `list`.


## Examples

### Example #1
Insereix la llista (\{3, 4\}) a la llista de destinació (\{1, 2, 5\}) a l'índex 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2
Insereix una llista amb una llista imbricada (\{1, \{1.1, 1.2\}\}) en una llista de destinació (\{2, 3, 4\}) a l'índex 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
