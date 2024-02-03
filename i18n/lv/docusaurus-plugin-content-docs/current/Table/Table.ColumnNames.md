---
title: Table.ColumnNames
---

# Table.ColumnNames


## Description

Tiek atgriezts saraksts, kurā ir ietverti kolonnu nosaukumi.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Details

Tiek atgriezts teksta vērtību saraksts, kurā ir ietverti tabulas <code>table</code> kolonnu nosaukumi.


## Examples

### Example #1 
Iegūstiet tabulas kolonnu nosaukumus.
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
