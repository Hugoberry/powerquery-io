---
title: Table.InsertRows
---

# Table.InsertRows


## Description

Infogar en lista med rader i tabellen vid angiven position.


## Syntax

```powerquery
Table.InsertRows(
    table as table,
    offset as number,
    rows as list
) as table
```


## Details

Returnerar en tabell med listan med rader, <code>rows</code>, infogad i <code>table</code> vid angiven position, <code>offset</code>. Varje kolumn i raden som ska infogas måste matcha tabellens kolumntyper.


## Examples

### Example #1 
Infoga raden i tabellen vid position 1.
```powerquery
Table.InsertRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    1,
    {[CustomerID = 3, Name = "Paul", Phone = "543-7890"]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Infoga två rader i tabellen vid position 1.
```powerquery
Table.InsertRows(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    1,
    {
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
