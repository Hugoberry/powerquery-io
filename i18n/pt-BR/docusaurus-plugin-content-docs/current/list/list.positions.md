---
title: List.Positions
---

# List.Positions


Retorna uma lista de deslocamentos para a entrada.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Retorna uma lista de deslocamentos para a lista de entrada especificada.

-   `list`: A lista de entrada.

Ao usar `List.Transform` para alterar uma lista, a lista de posições pode ser usada para conceder à transformação acesso à posição.


## Examples

### Example #1
Localize os deslocamentos de valores na lista \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Criar uma tabela que atribui uma ID a cada cliente com base na posição do cliente na lista.
```powerquery
let
    customers = {"Alice", "Bob", "Charlie", "Diana"},
    resultTable =
        Table.FromRecords(
            List.Transform(
                List.Positions(customers),
                each [
                    IDNumber = _ + 1,   // Make it 1-based
                    CustomerName = customers{_}
                ]
            ),
            type table [IDNumber = Int64.Type, CustomerName = text]
        )
in
    resultTable
```

Result: 
```powerquery
#table (type table[IDNumber = Int64.Type, CustomerName = text],
{
    {1, "Alice"},
    {2, "Bob"},
    {3, "Charlie"},
    {4, "Diana"}
})
```




## Category
List.Selection
