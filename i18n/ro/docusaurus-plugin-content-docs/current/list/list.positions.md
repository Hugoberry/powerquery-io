---
title: List.Positions
---

# List.Positions


Returnează o listă de decalaje pentru datele introduse.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Returnează o listă de decalaje pentru lista de intrări specificată.

-   `list`: lista de intrare.

Atunci când utilizați `List.Transform` pentru a modifica o listă, lista de poziții poate fi utilizată pentru a oferi transformării acces la poziție.


## Examples

### Example #1
Aflaţi decalajele valorilor din lista \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Creați un tabel care atribuie un ID fiecărui client pe baza poziției clientului în listă.
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
