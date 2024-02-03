---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Maakt een tabel van een lijst kolommen en opgegeven waarden.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Hiermee wordt een tabel gemaakt van het type <code>columns</code> van een lijst <code>lists</code> die geneste lijsten met de kolomnamen en -waarden bevat. Als in bepaalde kolommen meer waarden staan dan in andere kolommen, worden de ontbrekende waarden ingevuld met de standaardwaarde null als in die kolommen de waarde null kan worden ingevoerd.


## Examples

### Example #1 
Een tabel retourneren uit een lijst met klantnamen in een lijst. Elke waarde in het klantenlijstitem wordt een rijwaarde en elke lijst wordt een kolom.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Een tabel van een opgegeven lijst kolommen en een lijst kolomnamen maken.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Een tabel maken met een verschillend aantal kolommen per rij. De waarde van de ontbrekende rij is null.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
