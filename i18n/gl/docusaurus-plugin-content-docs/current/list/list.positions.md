---
title: List.Positions
---

# List.Positions


Devolve unha lista de desprazamentos da entrada.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Devolva unha lista de desprazamentos para a lista de entrada especificada.

-   `list` : A lista de entrada.

Ao usar `List.Transform` para cambiar unha lista, a lista de posicións pódese usar para darlle acceso á transformación á posición.


## Examples

### Example #1
Buscar os desprazamentos dos valores na lista \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Cree unha táboa que asigne un ID a cada cliente en función da posición que ocupa na lista.
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
