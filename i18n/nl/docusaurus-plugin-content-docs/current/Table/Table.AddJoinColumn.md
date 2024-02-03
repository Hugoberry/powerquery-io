---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

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


## Details

Koppelt de rijen van <code>table1</code> aan de rijen van <code>table2</code> op basis van de gelijkheid van de waarden van de sleutelkolommen die zijn geselecteerd door <code>key1</code> (voor <code>table1</code>) en <code>key2</code> (voor <code>table2</code>). De resultaten komen in de kolom <code>newColumnName</code> te staan.Deze functie werkt zoals Table.Join met een JoinKind van LeftOuter, echter met dit verschil dat de resultaten van de koppeling genest en niet plat worden weergegeven.


## Examples

### Example #1 
Een koppelingskolom toevoegen aan  (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) genaamd &#34;prijs/voorraad&#34; vanuit de tabel (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) gekoppeld op [saleID].
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
