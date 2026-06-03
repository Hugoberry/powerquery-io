---
title: Table.FromRecords
---

# Table.FromRecords


Converteert een lijst met records naar een tabel.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Converteert een opgegeven lijst met records naar een tabel.

-   `records`: de lijst met records die je wilt omzetten naar een tabel.
-   `columns`: (optioneel) een lijst met kolomnamen van de tabel of het type van de tabel.
-   `missingField`: (optioneel) hiermee geef je op hoe ontbrekende velden in een rij moeten worden verwerkt. Gebruik een van de volgende waarden:
    -   `MissingField.Error`: ontbrekende velden veroorzaken een fout (standaard).
    -   `MissingField.UseNull`: ontbrekende velden worden opgenomen als `null` waarden.
      
    Als je `MissingField.Ignore` in deze parameter gebruikt, treedt er een fout op.


## Examples

### Example #1
Een tabel maken van records, met recordveldnamen als kolomnamen.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Maak een tabel op basis van records met getypte kolommen en selecteer de nummerkolommen.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Maak een tabel met de voornaam, de middelste begin- en achternaam van de klanten uit de opgegeven records. Als een van de waarden ontbreekt, vervang je de waarde door `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
