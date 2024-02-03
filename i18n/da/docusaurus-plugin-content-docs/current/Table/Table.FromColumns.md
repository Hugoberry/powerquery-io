---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Opretter en tabel ud fra en liste med kolonner og angivne værdier.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Opretter en tabel af typen <code>columns</code> ud fra en liste <code>lists</code>, der indeholder indlejrede lister med kolonnenavne og værdier.    Hvis nogen af kolonnerne har flere værdier end andre, udfyldes de manglende værdier med standardværdien 'null', hvis kolonnen må være null.


## Examples

### Example #1 
Returner en tabel fra en liste over kundenavne i en liste. Hver værdi i kundelisteelementet bliver en rækkeværdi, og hver liste bliver en kolonne.
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
Opret en tabel ud fra en angivet liste over kolonner og en liste over kolonnenavne.
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
Opret en tabel med et andet antal kolonner pr. række. Den manglende rækkeværdi er null.
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
