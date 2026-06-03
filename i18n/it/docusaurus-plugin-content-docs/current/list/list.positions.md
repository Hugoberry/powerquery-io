---
title: List.Positions
---

# List.Positions


Restituisce l'elenco degli offset per l'input.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Restituisce l'elenco degli offset per l'elenco di input specificato .

-   `list`: l'elenco di input.

Quando si usa `List.Transform` per modificare un elenco, è possibile usare l'elenco delle posizioni per fornire alla trasformazione l'accesso alla posizione.


## Examples

### Example #1
Trovare gli offset dei valori nell'elenco \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Creare una tabella che assegna un ID a ogni cliente in base alla posizione del cliente nell'elenco.
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
