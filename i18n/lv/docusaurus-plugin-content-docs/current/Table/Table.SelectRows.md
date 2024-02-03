---
title: Table.SelectRows
---

# Table.SelectRows


## Description

Tiek atlasītas rindas, kas atbilst nosacījuma funkcijai.


## Syntax

```powerquery
Table.SelectRows(
    table as table,
    condition as function
) as table
```


## Details

Tiek atgriezta rindu tabula no <code>table</code>, kas atbilst atlases <code>condition</code>.


## Examples

### Example #1 
Atlasīt tās tabulas rindas, kurās kolonnas [CustomerID] vērtība ir lielāka nekā 2.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] > 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Atlasīt tās tabulas rindas, kurās esošajos nosaukumos nav ietverts burts “B”.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each not Text.Contains([Name], "B")
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
