---
title: List.Positions
---

# List.Positions


Devuelve una lista de desplazamientos para la entrada.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Devuelve una lista de desplazamientos para la lista de entrada especificada.

-   `list`: La lista de entrada.

Cuando se utiliza `List.Transform` para cambiar una lista, la lista de posiciones se puede utilizar para dar acceso a la transformación a la posición.


## Examples

### Example #1
Buscar los desplazamientos de los valores de la lista \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Cree una tabla que asigne un id. a cada cliente en función de su posición en la lista.
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
