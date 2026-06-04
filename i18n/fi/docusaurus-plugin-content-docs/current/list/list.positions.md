---
title: List.Positions
---

# List.Positions


Palauttaa siirtymien luettelon syötteelle.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Palauttaa siirtymien luettelon määritetylle syöteluettelolle.

-   `list`: Syöteluettelo.

Kun luetteloa muutetaan kohteen `List.Transform` avulla, sijaintien luettelon avulla voidaan antaa muunnokselle sijainnin käyttö.


## Examples

### Example #1
Selvitä luettelon \{1, 2, 3, 4, null, 5\} arvojen siirtymät.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Luo taulukko, joka antaa tunnuksen jokaiselle asiakkaalle asiakkaan sijainnin perusteella luettelossa.
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
