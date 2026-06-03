---
title: Table.NestedJoin
---

# Table.NestedJoin


Voert een koppeling tussen tabellen uit op opgegeven kolommen en plaatst het resultaat van die koppeling in een nieuwe kolom.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Hiermee worden de rijen van `table1` gekoppeld aan de rijen van `table2` op basis van de gelijkheid van de waarden van de sleutelkolommen die zijn geselecteerd met `key1` (voor `table1`) en `key2` (voor `table2`). De resultaten komen in de kolom `newColumnName` te staan.

Met de optionele waarde `joinKind` wordt het type join opgegeven dat moet worden uitgevoerd. Er wordt standaard een outer join aan de linkerkant uitgevoerd als `joinKind` niet is opgegeven.

Een optionele set van `keyEqualityComparers` kan worden opgenomen om te specificeren hoe de sleutelkolommen moeten worden vergeleken. Deze functie is momenteel uitsluitend bedoeld voor intern gebruik.


## Examples

### Example #1
Twee tabellen samenvoegen met één sleutelkolom.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
