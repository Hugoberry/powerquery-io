---
title: List.Positions
---

# List.Positions


Pateikiamas įvesties poslinkių sąrašas.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Pateikiamas nurodyto įvesties sąrašo poslinkių sąrašas.

-   `list`: įvesties sąrašas.

Naudojant `List.Transform` norint pakeisti sąrašą, galima naudoti padėčių sąrašą, kad padėčiai būtų suteikta transformavimo prieiga.


## Examples

### Example #1
Raskite reikšmių poslinkius sąraše \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Sukurkite lentelę, kurioje kiekvienam klientui priskiriamas ID pagal jo vietą sąraše.
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
