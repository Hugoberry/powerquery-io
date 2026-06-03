---
title: List.Positions
---

# List.Positions


Devolve uma lista de desvios para a entrada.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Devolve uma lista de desvios para a lista de entrada especificada.

-   `list`: A lista de entrada.

Quando utilizar `List.Transform` para alterar uma lista, é possível utilizar a lista de posições para fornecer o acesso de transformação à posição.


## Examples

### Example #1
Determinar os desvios dos valores existentes na lista \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Crie uma tabela que atribua um ID a cada cliente com base na posição do cliente na lista.
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
