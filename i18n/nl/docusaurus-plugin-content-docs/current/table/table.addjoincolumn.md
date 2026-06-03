---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Voert een koppeling tussen tabellen uit op opgegeven kolommen en plaatst het resultaat van die koppeling in een nieuwe kolom.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

Koppelt de rijen van `table1` aan de rijen van `table2` op basis van de gelijkheid van de waarden van de sleutelkolommen die zijn geselecteerd door `key1` (voor `table1`) en `key2` (voor `table2`). De resultaten komen in de kolom `newColumnName` te staan. Deze functie werkt zoals Table.Join met een JoinKind van LeftOuter, echter met dit verschil dat de resultaten van de koppeling genest en niet plat worden weergegeven.


## Examples

### Example #1
Een koppelingskolom toevoegen aan (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) genaamd "prijs/voorraad" vanuit de tabel (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) gekoppeld op \[saleID\].
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
