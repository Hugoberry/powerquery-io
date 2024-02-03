---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Skapar en tabell från en lista med kolumner och angivna värden.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Skapar en tabell av typen <code>columns</code> från en lista <code>lists</code> som innehåller kapslade listor med kolumnnamn och värden.    Om vissa kolumner har fler värden än andra fylls de värden som saknas i med standardvärdet, null, om kolumnerna kan vara null.


## Examples

### Example #1 
Returnera en tabell från en lista med kundnamn i en lista. Varje värde i kundlistobjektet blir till ett radvärde, och varje lista blir en kolumn.
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
Skapa en tabell från en angiven lista med kolumner och en lista med kolumnnamn.
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
Skapa en tabell med olika antal kolumner per rad. Det saknade radvärdet är null.
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
