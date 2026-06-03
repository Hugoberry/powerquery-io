---
title: List.InsertRange
---

# List.InsertRange


Insere valores numa lista no índice especificado.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Devolve uma lista nova produzida pela inserção dos valores existentes em `values` em `list` em `index`. A primeira posição na lista encontra-se no índice 0.

-   `list`: a lista de destino onde os valores devem ser inseridos.
-   `index`: o índice da lista de destino (`list`) onde os valores devem ser inseridos. A primeira posição na lista encontra-se no índice 0.
-   `values`: a lista de valores que devem ser inseridos em `list`.


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
Inserir uma lista com uma lista aninhada (\{1, \{1.1, 1.2\}\}) numa lista de destino (\{2, 3, 4\}) no índice 0.
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
