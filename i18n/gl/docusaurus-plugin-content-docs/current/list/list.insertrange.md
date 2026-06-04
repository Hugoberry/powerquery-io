---
title: List.InsertRange
---

# List.InsertRange


Insire valores nunha lista no índice indicado.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Devolve unha lista producida pola inserción dos valores en `values` en `list` en `index`. A primeira posición da lista está no índice 0.

-   `list`: a lista de destino onde se van inserir os valores.
-   `index`: o índice da lista de destino (`list`) onde se van inserir os valores. A primeira posición da lista está no índice 0.
-   `values`: a lista de valores na que se van inserir os valores `list`.


## Examples

### Example #1
Inserir a lista (\{3, 4\}) na lista de destino (\{1, 2, 5\}) no índice 2.
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
Inserir a lista cunha lista aniñada (\{1, \{1.1, 1.2\}\}) na lista de destino (\{2, 3, 4\}) no índice 0.
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
